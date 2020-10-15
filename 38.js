function slugify(sentence, lowercase) {
  const slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    return slug.lowercase();
  }
  return slug;
}

const values = [0, NaN, null, undefined, '', -1, [], {}];
values.forEach((value) => {
  if (value) {
    console.log(`true ${value}`);
  } else {
    console.log(`false ${value}`);
  }
});
