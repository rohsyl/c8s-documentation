# Setting Up Testing for Your Laravel Project with c8s

## Introduction

In this guide, you'll learn how to set up a testing workflow for your Laravel project using c8s in just a few clicks. We will configure a GitHub Actions workflow to run Laravel tests automatically.

## Prerequisites

Before you begin, ensure you have the following:

- A working Laravel project with a few tests
- Your project hosted on GitHub
- A c8s account
- c8s linked with your GitHub account (Follow [this tutorial](Create-a-new-source.md) to link your repository.)

## Import Your Project into c8s and Create a Workflow

1. Navigate to **Projects** -> Click **+ Add**.
2. Select the source where your repository is hosted.

![Create Project](laravel-art-create-project.png)

3. Click on the newly created project and then click **+ Add Workflow**.
4. Select **Use a Template**.

![Use Template](laravel-art-use-template.png)

5. Search for "Laravel" in the search field to find a relevant workflow template.

![Search Template](laravel-art-search-template.png)

6. Review the workflow template preview and click **Create Workflow**.

![Create Workflow from Template](laravel-art-create-workflow-from-template.png)

## Customize Your Workflow

The newly added workflow might require some adjustments to suit your project needs.

### Configuring Triggers

Triggers define when the workflow runs. For instance, it can execute on a push or a pull request.

![Triggers](laravel_art_triggers_before.png)

By default, the template includes two triggers: **Push** and **Pull Request**. For this example, let's configure it to run only when pushing to the `develop` branch:

1. Remove the **Pull Request** trigger:
  - Click on it.
  - In the modal that appears, click **Delete**.
2. Modify the **Push** trigger to run only on the `develop` branch:
  - Click on the **Push** trigger.
  - Edit the YAML accordingly.
  - Click **Save**.

![Edit Push Trigger](laravel_art_edit_push_trigger.png)

### Adding Services (Optional)

Services are Docker containers that provide dependencies like databases or caching layers for your tests. Common examples include MySQL, Redis, and Elasticsearch.

![Available Services](laravel_art_available_services.png)

Since this template does not use any additional services, we can skip this step for now.

### Managing Jobs

A workflow can consist of multiple jobs. In this example, there is a single job named **laravel-tests**.

![Jobs Overview](laravel-art-jobs-overview.png)

Each job consists of multiple steps that execute sequentially.

### Understanding Steps

Each step can be either:
- A **GitHub Action** (identified by a small GitHub icon)
- A **Shell Command** (indicated by a terminal icon)

## Linting Your Workflow

c8s provides a **Linting** feature to check for syntax errors in your workflow. To validate your workflow:

1. Click on the **Check** button at the top right of the page.

![Linting Success](laravel_art_lint_success_modal.png)

If no issues are found, your workflow is ready for deployment.

## Previewing the Generated YAML

You can preview the YAML file that c8s will generate by clicking on the **Preview** button.

![Workflow Preview](laravel_art_workflow_preview.png)

## Deploying Your Workflow

Once everything is set up, click on the **Deploy** button.

![Deploy Preview](laravel_art_deploy_preview.png)

This action will commit and push a new workflow file to your repository, and your Laravel tests will run automatically!

## Conclusion

Congratulations! You've successfully set up a GitHub Actions testing workflow for your Laravel project using c8s. Now, every time you push changes to your repository, your tests will run automatically, ensuring code quality and stability.