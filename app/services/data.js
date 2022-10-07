import Service from '@ember/service';
import ENV from 'flexberry-books/config/environment';

export default Service.extend({
  async createBookCover(bookId, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        uploadData.url = `${ENV.fileUploadURL}`;

        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: bookId,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

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
