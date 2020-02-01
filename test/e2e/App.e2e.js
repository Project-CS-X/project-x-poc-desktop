import { ClientFunction } from 'testcafe';

const getPageTitle = ClientFunction(() => document.title);
const assertNoConsoleErrors = async t => {
  const { error } = await t.getBrowserConsoleMessages();
  await t.expect(error).eql([]);
};

fixture`App Page`.page('../../app/app.html').afterEach(assertNoConsoleErrors);

test('should open window and contain expected page title', async t => {
  await t.expect(getPageTitle()).eql('Hello Electron React!');
});

// Makes sure there are no errors in the console
test(
  'should not have any logs in console of main window',
  assertNoConsoleErrors
);
