
Docker Version :

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
