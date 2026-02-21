# generator-jhipster-yellowbricks-client-relativepathresource

Assume the context-path is "/jh"

For `src/main/webapp/content/css/loading.css`
```diff
-  background-image: url('/content/images/logo-jhipster.png');
+  background-image: url('../images/logo-jhipster.png');
   background-size: contain;
   -webkit-animation: lds-pacman-3 1s linear infinite;
```
