# Vercel Monorepo

#### Create New Projects

- `yarn run create <PROJECT_NAME>`

## `packages` folder

The `packages` folder contains both applications (aka Vercel projects) and modules.

If the folder is a Vercel project then you'll need to add a [Ignore Build Step](https://vercel.com/docs/platform/projects#ignored-build-step) so changes to a project don't trigger a deployment to all projects. For example, for the `front` project the ignored build step would look like this:

```bash
git diff --quiet HEAD^ HEAD -- :/packages/front
```

Now, each change that happens outside `packages/front` won't create a new deployment.

> Follow the docs for [Ignore Build Step](https://vercel.com/docs/platform/projects#ignored-build-step) if you don't know where to add the command above.

If `packages/front` has a dependency on a module called `packages/framework` then the command would change to:

```bash
git diff --quiet HEAD^ HEAD -- :/packages/front :/packages/framework
```

Now, if the `framework` module changes, a new deployment for the `front` project will be created, and for other projects that may also depend on it.

---
