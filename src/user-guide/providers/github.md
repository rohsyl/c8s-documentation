# GitHub sources

Sources are platform where your project are stored.

## Create
First, you will need to create a new source in c8s.

<procedure title="Create a new GitHub source">
<step>
Go to the <ui-path>Sources</ui-path> menu. Then click on <control>+ Add</control>.
</step>
<step>
Fill in a Name and an Organization.
<tip>These values will be used to create a new <emphasis>GitHub Application</emphasis>.</tip>
</step>
<step>
Click on <control>Continue</control>
<img alt="c8s-source-create-modal-1.png" src="c8s-source-create-modal-1.jpeg" border-effect="rounded"/>
</step>
</procedure>



## Register

This will leave you with an un-configured source in c8s. The next step will be to registered it within your
GitHub account

<procedure title="Register a GitHub source">
<step>
Open the source under <ui-path>Sources | c8s-xxxxxxxx</ui-path>
<img alt="c8s-source-create-need-reg-1.png" src="c8s-source-create-need-reg-1.jpeg" border-effect="rounded"/>
</step>
<step>
Click on <control>Register now</control>
<img alt="c8s-source-register-1.png" src="c8s-source-register-1.jpeg" border-effect="rounded"/>
</step>
<step>
Click on <control>Create GitHub App for xxx</control>.
<img alt="c8s-source-create-gh-app-1.png" src="c8s-source-create-gh-app-1.jpeg" border-effect="rounded"/>
<tip>This will create a new app on GitHub and redirect you back to c8s.</tip>
</step>
</procedure>

## Install

<procedure title="Install a GitHub source">
<step>
Head back to your source under <ui-path>Sources | c8s-xxxxxxxx</ui-path> and click on <control>Install GitHub App</control>.
<img alt="c8s-source-install-gh-app-1.png" src="c8s-source-install-gh-app-1.jpeg" border-effect="rounded"/>
</step>
<step>
Install this app on your personal GitHub account and grant access to one or many of you <emphasis>repositories</emphasis>. Click on
<control>Install</control>.
<img alt="c8s-source-install-gh-app-2.png" src="c8s-source-install-gh-app-2.jpeg" border-effect="rounded"/>
</step>
</procedure>


## Verify

<p>
    You can see your source under <ui-path>Sources | c8s-xxxxxxxx</ui-path> in the <ui-path>Permissions</ui-path> section.
</p>

<procedure title="Refresh permissions">
<step>
Click on <control>Fetch permissions</control>
</step>
<img alt="c8s-source-review.png" src="c8s-source-review.jpeg" border-effect="rounded"/>
</procedure>

