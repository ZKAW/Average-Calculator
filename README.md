# Average calculator

#### Automatic average calculator working in nodeJS and ElectronJS.

** How to install **

  To install dev dependencies -> `npm install` in the project dir.

  To build .exe -> 
    - `npm buil32` -> Build win32 32bit version.
    - `npm build64` -> Build win32 64bit version.
    - `npm buildall` -> Build both win32 32bit and win32 64bit version.

  The output will be stored in "build/".
  
  * Note that platform can be change in the package.json scripts.

** How to start **

  In order to start it with node and commandline -> `npm start`
  To start the executable version -> open the executable file in "build/"

** How to use **

  Put a number, (and a coefficient) then click the "Add" button (or Enter key). 
  This will add the number to the list, and automatically calculate the average of every numbers added until you hit the "Reset" button.
  
  * Exemple: If I want to calculate the average of these numbers: 4, 8, 16; I will add them one by one.
