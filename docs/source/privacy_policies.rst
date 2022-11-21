Privacy policies
================

Last modified: November 18th, 2022

Introduction
------------

JupyterLab development team avoids as much as possible the use of external
web services. However to provide some features requests to those kind of
services are required (see below for a full list). But those features are
opt-in by default (aka you need to explicitly consent to activate them).

The development team takes a proactive approach to user privacy and
ensures the necessary steps are taken to protect the privacy of its users
throughout their experience.

This policy sets out the different areas where user privacy is concerned
and outlines the obligations and requirements of the JupyterLab
development team.

What information do we collect?
-------------------------------

The external web services are collecting some information.
However they are not accessible by the JupyterLab development team. And
therefore we do not collect any information.

Features using external services
--------------------------------

Announcements plugin
^^^^^^^^^^^^^^^^^^^^

The announcements plugin is fetching a news feed from a GitHub page website
(https://jupyterlab.github.io/assets) and metadata of the JupyterLab Python
package on PyPI.org (https://pypi.org/pypi/jupyterlab/json).

Fetching those information will only happen if the user clicks on the *Yes*
button of the notification asking if they want to be notified by JupyterLab news.
That choice is stored as a user settings in *Notifications* ->
*Fetch official Jupyter news*. It can be reverted.

The plugin can also be disabled by executing:

.. code::bash

    jupyter labextension disable "@jupyterlab/apputils-extension:announcements"

Extension manager plugin
^^^^^^^^^^^^^^^^^^^^^^^^

The extensions manager plugin is fetching extension packages metadata on npm public registry
(https://registry.npmjs.org/-/v1/) and on a Content Delivery Network (https://unpkg.com)
and package author thumbnails on GitHub (https://github.com).

Fetching those information will only happen if the user clicks on the *Enable*
button in the extensions manager side panel.
That choice is stored as a user settings in *Extension Manager* ->
*Disclaimed Status*. It can be reverted.

The plugin can also be disabled by executing:

.. code::bash

    jupyter labextension disable "@jupyterlab/extensionmanager-extension:plugin"

External web services
---------------------

GitHub Pages
^^^^^^^^^^^^

The service hosting the https://jupyterlab.github.io website stores access logs.
That data is not accessible to and not readable for the JupyterLab development team.

The privacy policy of the hosting service GitHub can be found at https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement.

npm
^^^

The service providing NPM public registry (https://registry.npmjs.org/-/v1/) collects
data about how you use npm registry.
That data is not accessible to and not readable for the JupyterLab development team.

The privacy policy of the NPM public registry can be found at https://docs.npmjs.com/policies/privacy.

PyPI.org
^^^^^^^^

The service providing Python packages metadata website (https://pypi.org) stores access logs.
That data is not accessible to and not readable for the JupyterLab development team.

The privacy policy of the packages hosting service PyPI can be found at https://www.python.org/privacy/.

unpkg.com
^^^^^^^^^

The service providing NPM packages (https://unpkg.com/) is not providing information about data
collection.
If data are collected, they are not accessible to and not readable for the JupyterLab development team.

The project is open source and the origin server is deployed on `Fly.io <https://fly.io/>`_ (see `Fly.io privacy policy <https://fly.io/legal/privacy-policy/>`_)
and the content delivery network is powered by `Cloudflare <https://www.cloudflare.com/>`_ (see `Cloudflare privacy policy <https://www.cloudflare.com/privacypolicy/>`_).


Changes to policy
-----------------

Our Privacy Policy may change from time to time, and the new policy will be posted
on this page. We will never materially change our policies and practices to make
them less protective of personal information collected in the past without your
prior consent.
