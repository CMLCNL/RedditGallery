describe('Reddit Gallery', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should have search', async () => {
    await element(by.id('search-input')).typeText('pics');
    await element(by.id('search-input')).tapReturnKey();
  });

  it('should have tap card', async () => {
    await element(by.id('home-card-0')).tap();
  });

  it('should have detail screen', async () => {
    await element(by.id('header-back-button')).tap();
  });
});
