// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// So debuggen Sie Code beim Seitenladen in Ripple oder auf Android-Geräten/-Emulatoren: Starten Sie die App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        document.getElementById('login').addEventListener('click', login.bind(this), false);

        document.getElementById('logout').addEventListener('click', logout.bind(this), false);

        document.getElementById('isAvailable').addEventListener('click', isAvailable.bind(this), false);

        document.getElementById('trySilentLogin').addEventListener('click', trySilentLogin.bind(this), false);
        document.getElementById('disconnect').addEventListener('click', disconnect.bind(this), false);
        document.getElementById('getSigningCertificateFingerprint').addEventListener('click', getSigningCertificateFingerprint.bind(this), false);

    };

    function login() {
      window.plugins.googleplus.login(
          {
              // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
              'webClientId': '532680238703-buvcrqdvdo22q0i975urc063uq76ojfp.apps.googleusercontent.com'
          },
          function (obj) {
            document.querySelector("#image").src = obj.imageUrl;
            document.querySelector("#image").style.visibility = 'visible';
            document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email;
            alert(JSON.stringify(obj));
          },
          function (msg) {
              document.querySelector("#feedback").innerHTML = "error: " + msg;
              alert('error: ' + msg);
          }
      );
    }

    function logout() {
      window.plugins.googleplus.logout(
          function (msg) {
            document.querySelector("#image").style.visibility = 'hidden';
            document.querySelector("#feedback").innerHTML = msg;
          },
          function (msg) {
            document.querySelector("#feedback").innerHTML = msg;
          }
      );
    }

    function isAvailable() {
      window.plugins.googleplus.isAvailable(function(avail) {alert(avail)});
    }

    function trySilentLogin() {
        window.plugins.googleplus.trySilentLogin(
            {
                // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
                'webClientId': '532680238703-buvcrqdvdo22q0i975urc063uq76ojfp.apps.googleusercontent.com'
            },
            function (obj) {
                document.querySelector("#image").src = obj.imageUrl;
                document.querySelector("#image").style.visibility = 'visible';
                document.querySelector("#feedback").innerHTML = "Silent hi, " + obj.displayName + ", " + obj.email;
            },
            function (msg) {
                document.querySelector("#feedback").innerHTML = "error: " + msg;
            }
        );
    };

    function disconnect() {
      window.plugins.googleplus.disconnect(
          function (msg) {
            document.queryselector("#image").style.visibility = 'hidden';
            document.queryselector("#feedback").innerhtml = msg;
          },
          function (msg) {
            document.queryselector("#feedback").innerhtml = msg;
          }
      );
    }

    function getSigningCertificateFingerprint() {
        window.plugins.googleplus.getSigningCertificateFingerprint(
            function (res) { alert(res) },
            function (res) { alert(res) })
    };


    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    };

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    };
} )();