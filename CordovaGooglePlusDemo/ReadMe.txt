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
{
  "project_info": {
    "project_number": "532680238703",
    "project_id": "project-7499442332703738664"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:532680238703:android:2c7af2928642e2ef",
        "android_client_info": {
          "package_name": "io.cordova.myappeb19fc"
        }
      },
      "oauth_client": [
        {
          "client_id": "532680238703-dlc99l4qoheu3d4e9u4n6qgetciboc6g.apps.googleusercontent.com",
          "client_type": 3
        },
        {
          "client_id": "532680238703-ibbndadhl9k471r259ejc8lee45dlgoo.apps.googleusercontent.com",
          "client_type": 1,
          "android_info": {
            "package_name": "io.cordova.myappeb19fc",
            "certificate_hash": "7816cd31bd37bc3761bb221dc5a568722c0b46b2"
          }
        }
      ],
      "api_key": [
        {
          "current_key": "AIzaSyCNBi1vE7qHnAL3J_GXxGw9cIQ--4bicQU"
        }
      ],
      "services": {
        "analytics_service": {
          "status": 1
        },
        "appinvite_service": {
          "status": 1,
          "other_platform_oauth_client": []
        },
        "ads_service": {
          "status": 1
        }
      }
    }
  ],
  "configuration_version": "1"
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