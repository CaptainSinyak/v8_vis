## Linking

For local testing out new features of Project Ui-Kit under development in main project (Agency, for example) you can use [linking](https://classic.yarnpkg.com/en/docs/cli/link/).
Follow these instructions to do it:

1. Run `yarn link` in Project Ui-Kit folder;
2. In main project folder `cd node_modules/react` & run `yarn link`, then do the same with **react-dom** for linking these two packages to prevent conflict with two instances of them;
3. Run `yarn link react` & `yarn link react-dom` in Project Ui-Kit folder;
4. After making changes in Project Ui-Kit run `yarn build` there;
5. To test the changes run `yarn link «@project/ui-kit»` in main project folder.

To reverse linking use `yarn unlink «@project/ui-kit»` in main project.

Sometimes the linking package can be removed after unlinking. To fix this run `yarn install —force` to reinstall the package.
