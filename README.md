## Linking

For local testing out new features of Project Ui-Kit under development in main project (Agency, for example) you can use [linking](https://github.com/facebook/create-react-app).
Follow these instructions to do it:

Run `yarn link` in Project Ui-Kit folder;
In main project folder `cd node_modules/react` & run `yarn link`, then do the same with **react-dom** package for linking these two packages to prevent conflict with two instances of them;
Run `yarn link react` & `yarn link react-dom` in Project Ui-Kit folder;
After making changes in Project Ui-Kit run `yarn build` there;
To test the changes run `yarn link «@project/ui-kit»` in main project folder.

To reverse linking use `yarn unlink «@project/ui-kit»` in main project.

Sometimes the linking package can be removed after unlinking. To fix this run `yarn install —force` to reinstall the package.
