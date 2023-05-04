# Module Federation with Angular

This is a demo project to showcase the ability of module federation with a variety of micro frontends.

## Important Files

Have a particular look at the following files:

- ``readme.md``: Shows how to install dependencies and how to start the example
- ``projects\mfe1\webpack.config.js``: Microfrontend config
- ``projects\mfe2\webpack.config.js``: Microfrontend config
- ``projects\shell\webpack.config.js``: Shell config
- ``projects\shell\src\app\app.routes.ts``: Lazy route for microfrontend
- ``projects\shell\src\decl.d.ts``: Typing for mapped Url pointing to microfrontend

## Installation and Usage

Run the following command to install the required packages

```
npm i
```

To start the applications:

- Start Micro Frontends (remote): ``ng serve mfe1 -o`` and ``ng serve mfe2 -o``
- Start Shell (host): ``ng serve shell -o``
- Make sure ``mfe1`` and/or ``mfe2`` is started before ``shell`` is loaded into the browser
- Use the hyperlink ``flights`` in the ``shell`` to load `mfe1`

\* Please note, you **must** use **yarn** during the beta phase of CLI 11 b/c it allows to override dependencies to force the CLI into webpack 5.

## More Details on Module Federation

Have a look at this [article series about Module Federation](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)

## Angular Trainings, Workshops, and Consulting

- [Angular Trainings and Workshops](https://www.angulararchitects.io/en/angular-workshops/)
- [Angular Consulting](https://www.angulararchitects.io/en/consulting/)
