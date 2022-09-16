import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getFormattedTags(tags/*, hash*/) {
  const flatTags = tags.flat();
  const formattedTags  = flatTags.reduce((acc, tag) => {
    const tagMarkup = `<a href="#" class="tag-link"><span class="small">#${tag}</span></a>`;
    acc.push(tagMarkup);
    return acc;
  }, []);
  return htmlSafe(formattedTags.join(', '));
}

export default helper(getFormattedTags);
