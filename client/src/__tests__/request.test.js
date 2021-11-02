import { getAllQuestions } from '../request.js';

test('the question data returned for 39333 is accurate', () => {
  return getAllQuestions(39333).then(results => {
    expect(results.data.product_id).toBe("39333");
  });
});