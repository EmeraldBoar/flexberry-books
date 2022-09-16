import Service from '@ember/service';
import ENV from 'flexberry-books/config/environment';
import { A } from '@ember/array'

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('speakers', A());
    this.set('books', A());
  },

  async getSpeakers(searchValue) {
    let searchQuery = searchValue ? `?q=${searchValue}` : '';

    try {
      let response = await fetch(`${ENV.backendURL}/speakers${searchQuery}`);
      let speakers = await response.json();
      this.get('speakers').clear();
      this.get('speakers').pushObjects(speakers);
      return this.get('speakers');

    } catch(error) {
      throw new Error(error);
    }
  },

  async getBooks(searchValue, tagsValue) {
    let route = {
      fullText: 'q=',
      filter: '_like=',
    }

    let separator = '&';
    let parameter = searchValue || tagsValue ? '?' : '';
    let tagDataName = 'tags';

    let searchQuery = searchValue ? `${route.fullText}${searchValue}` : '';
    let tagsQuery = tagsValue ? `${tagDataName}${route.filter}${tagsValue}` : '';


    let values = [searchQuery, tagsQuery];
    let query = values.filter((query) => query).join(separator);

    try {
      let response = await fetch(`${ENV.backendURL}/books${parameter}${query}`);
      let speakers = await response.json();
      this.get('books').clear();
      this.get('books').pushObjects(speakers);
      return this.get('books');

    } catch(error) {
      throw new Error(error);
    }
  },

  async getElement(id, routeName) {
    let response = await fetch(`${ENV.backendURL}/${routeName}/${id}`);
    return response.json();
  },

  async deleteElement(route, element) {
    this.get(route).removeObject(element);
    try {
      await fetch(`${ENV.backendURL}/${route}/${element.id}`, { method: 'DELETE' });
    } catch(error) {
      throw new Error(error);
    }
  },

  async createSpeaker(speaker) {
    try {
      await fetch(`${ENV.backendURL}/speakers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker),
      });
    } catch(error) {
      throw new Error(error);
    }

  },

  async createBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            // eslint-disable-next-line no-console
            console.log('Ok');
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },
});
