import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'Что нового в python за 2035 год?',
  img: 'https://i.pinimg.com/736x/39/52/12/395212ac9c8778170bdf0d337373090b.jpg',
  views: 10000,
  createdAt: '12.02.2030',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: { Authorization: 'awwad' },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'awwad' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
