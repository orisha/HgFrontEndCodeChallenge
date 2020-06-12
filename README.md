# HostGator Front-End Developer Challenge
 
### Author : Diego Favero 
<diego.g.favero@gmail.com>



#### React App following the sent instructions and layout.


Used on dev enviroment:

* Node JS v10.16.3
* npm v6.14.5
* React & ReactDOM v16.8.1



Addtional tools :

* WebPack -> for loaders
* Redux -> for state controller
* Babel -> for needs translations

Need Features :

* sass loader -> sass-loader 
* svg loader -> react-svg-loader 

Extra
* carousel -> react-responsive-carousel 
* jest and enzyme -> for tests 



###### To see a complete list of dependencies, please check App/package.json



### Installation:

###### Local Dev Version :

<hr>

Online Sample -> http://18.216.194.20/hgsample/ 
    
<hr>

Requisites 
* Node JS :

To check if you have NodeJS installed, open a <a href="https://en.wikipedia.org/wiki/Command-line_interface">CLI</a> instance and type:

    node -v

If node it is a unknow command, then, download it at :
https://nodejs.org/en/download/
And follow the installations instructions.

NodeJS comes with Npm, to check that type on CLI :
<br>
    npm -v

Once you have npm and NodeJS proper running, use your CLI to access the App folder into this repository.

then, type :

    npm install

Wait for it finishs, then type :

    npm start -- --port 3080

Wait for the message : Compiled successfully.

A browser window should pops up. If not, open your browser and hit : http://localhost:3080/


<hr>


### Installation:

###### Production :


<hr>

Online Sample -> http://18.216.194.20:3000
    
<hr>


First, follow the instructions on Local Dev Installation, but, skip lastt step ( npm start )
then, run on CLI :

    npm run-script build
    

Requisites 
* Docker :


You need Docker installer in your sytem !

Open a CLI and type:

<code> docker -v </code>

If docker it is a unknow command, then, download it at :
https://docs.docker.com/get-docker/
And follow the installations instructions.

Once you have Docker proper running, use your CLI to access the App folder.

Then Run :
    
    docker build -t host-gator .

Wait for the building.


Then Run :

    <code>   docker run -d --name hgcontainer -p 3000:80 host-gator  </code>

Wait for the building.

So, Now, try http://localhost:3000 .


If it not working, try :


    <code>  docker inspect hgcontainer  | grep "IPAddress" </code>

Wait for the building.

then, use on the browser the returned IP on port :3000


<br>
<br>
<hr>
Personal Comments and Annotations

## Approach

* Get API Data Only once, format the results according to needs
* Use states for change prices
* Use UI-Material for Radio Group
* Use CSS for style responses
* Use CSS media Property for device versions
* Hood as much as possible into Components
* Props for sending parameter over Components


### Problems :

### Configuration

* Jest Test Unit is not working due to Babel Version... Try it running: <code>npm run test</code>
* I could not update Babel version due to svg-loader .
* I could not load images into scss files.

### Images

* I problems with the svg images downloaded from xd site. It was all rendering black. To fix this, I had to open all images on photoshop and export it as svg again.  


That's leading  to 2 issues :
* 1 - How the images needed to be on right size, beacause   
* 2 - How the images were not embed, it brakes the layout when resize the window. Although, it renders fine when loaded in any size.



##   Final Thoughts

* It was my first time with react beyond tutorials.
* It feels like easy to learn and use, but the learning curve for config is a little harder
* Comparing with Jquery and pure JS, React takes a bit more of coding on begin, but, if the architecture was well thought, it will save lots of time later on
* Also, the way to control the flow is more complicated, although, more efficient .
* Check the ScreenShots folder to see how it rendered on my dev-enviroment  

<hr>

### Is this ready for production ?
   
The answer is <strong>NO</strong> .

Due to issues on configuration and svg images, this app is not ready for production !

