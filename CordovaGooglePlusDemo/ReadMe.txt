Step1:
======
Google-iOS:
Appname: CordovaGooglePlusDemo
iOS bundle ID: CordovaGooglePlusDemo_iOS

Downloaded GoogleService-Info.plist file contains:
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist SYSTEM "http://www.apple.com/DTDs/PropertyList-1.0.dtd" PUBLIC "-//Apple//DTD PLIST 1.0//EN">
<plist version="1.0">
	<dict>
		<key>CLIENT_ID</key>

		<key>REVERSED_CLIENT_ID</key>

		<key>PLIST_VERSION</key>
		<string>1</string>

		<key>BUNDLE_ID</key>
		<string>CordovaGooglePlusDemo_iOS</string>
	</dict>
</plist>

OR
https://developers.google.com/identity/protocols/OAuth2InstalledApp#creatingcred
https://console.developers.google.com/apis/credentials
Client-ID	
iOS-URL-Schema	
======================================================================================================================
Step 2:
=======
Google-Android:
Appname: CordovaGooglePlusDemo
Android package name: io.cordova.myappeb19fc
Android Signing Certificate SHA-1: DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09


Downloaded google-services.json file contains:
{"installed":
	{
		"project_id":"project-7499442332703738664",
		"auth_uri":"https://accounts.google.com/o/oauth2/auth",
		"token_uri":"https://accounts.google.com/o/oauth2/token",
		"auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
		"redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
	}
}

Step 3:
=======
To get the release certificate fingerprint:
keytool -exportcert -list -v \
-alias <your-key-name> -keystore <path-to-production-keystore>

To get the debug certificate fingerprint:
keytool -exportcert -list -v \
-alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore

The keytool utility prompts you to enter a password for the keystore. The default password for the debug keystore is android. The keytool then prints the fingerprint to the terminal. For example:
Certificate fingerprint: SHA1: DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09

>cd \d C:\Program Files (x86)\Java\jdk1.8.0_92\bin
>C:\Program Files (x86)\Java\jdk1.8.0_92\bin>keytool -exportcert -keystore "C:\Users\abdallah\.android\debug.keystore" -list -v -alias androiddebugkey 

Step 4:
=======
Install plugin
PM> cordova platform add ios
PM> cordova platform add android
PM> cordova prepare