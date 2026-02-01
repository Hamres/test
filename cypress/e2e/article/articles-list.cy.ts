describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });

  it('и статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it('При нажатии на кнопку "Экономика" подгружаются статьи с этой темой ', () => {
    cy.getByTestId('TabsECONOMIC').click();
    cy.wait(1000);
    cy.getByTestId('ArticleListItem').should('have.length', 1);
  });

  it('При нажатии на кнопку "Наука" подгружаются статьи с этой темой ', () => {
    cy.getByTestId('TabsSCIENCE').click();
    cy.wait(1000);
    cy.getByTestId('ArticleListItem').should('have.length', 1);
  });

  it('На стабах ()', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it.skip('скипается', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    cy.getByTestId('awdawdawd').should('exist');
  });
});
