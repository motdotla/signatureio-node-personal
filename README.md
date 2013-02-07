# Signature.io Node Personal

Signature.io Personal is an example app demonstrating the use of the Heroku Signature Add-On. See below to get started.

## Get Started on Heroku

After cloning this repo run the following:

    $ gem install heroku
    $ heroku create
    $ heroku addons:add signature
    $ git push heroku master

You should now be able to visit http://YOURSUBDOMAIN.herokuapp.com and use the application!

## Get Started Locally

To get started locally, you must first go through the steps to get starte on heroku. After that, you will need to setup an environment variable for your SIGNATURE_SECRET_API_KEY.

    $ heroku config:get SIGNATURE_SECRET_API_KEY

Note the value of SIGNATURE_SECRET_API_KEY, and then set that locally in your terminal.

    $ export SIGNATURE_SECRET_API_KEY=st_7a70d7776ddf29b883b25ae08f18ff

Now you can run the app locally.

    $ bundle exec rails s

## Additional Information

This app mainly depends on the [signatureio rubygem](https://github.com/scottmotte/signatureio) for interfacing with the Heroku Signature Add-On.