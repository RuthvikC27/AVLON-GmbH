<!-- # Given task -

- [x] Best for us to assess your abilities is build of a boilerplate

- [x] Node/Express/Mongo. It is a realistic scenario where of course OS is at your disposal and 
shows your abilities for seeing the big picture

- [x] So what is this going to be assessed on? What counts is how you work out a fitting structure that keeps in mind: 
production ready and of scale 20xCRUD

- [x] Considerations: microservices, scalability (load). A validation model should be there and think about organization of modules

- [x] Needless to say that everyone has a boilerplate he/she already uses to create

- [x] Still, taking it serious is advised since this alone will serve as a comparison to other candidates and determine shortlist or not

- [x] It is a 48 hour submission so 16:00 IST Monday -->

# Description -

**As this is just a boilerplate I have made much simpler.**

**Technologies used -**
* React JS
* Node JS/ Express JS
* Docker
* Kubernetes
* Ingress-nginx
* Skaffold

> Docker containers and Kubernetes are used to achieve microservice architecture.
> Ingress-nginx is an Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer.

**Advantages -**
1. Other web frameworks or custom frameworks can be easily added as microservice. 
1. Easy development, management and scalability.
1. Kubernetes deployments restart if the pods crash.

# Organizing node modules
> Common sharable code is achieved by publishing code to NPM and then installing as a dependency in microservices. I think this is the best way to organize sharable code. Sharable code such as Validation models, error handling, and authentication etc can be published to NPM or in the common folder.
> I created an organization in NPM and named it "rc27" and added package name "validation-model". I have create a simple validation model named authModel. In service 1 I have installed @rc27/validation-model as a dependency and in routes index file I have used it.

## About microservices

*Assuming each microservice has its own database*

### Two types:
### Synchronous
In this type one microservice can directly communicate to other microservice.
The major downside to this approach is if one service get crashed the other services depending on it may crash too.

### Asynchronous
**Two methods:**
  1. In the method 1, a microservice can send request throgh event bus. In this the downside is if one service gets crashed the other services depending on it may not work correctly but they don't get crashed  

  1. Method 2 is similar to method 1 but with a slight change. Assuming 2 services, service 1 instead of request data directly from service 2, service 1 stores all the necessary data for the each event happened in service 2. Even if service 2 goes down service 1 can work without any problem. Vice versa for service 2. In this there is data duplication but now a days storage is very cheap. The main advantage here is if one service goes down other services can work without any problem.

## OTHER STUFF

```kops create cluster \
--state=${KOPS_STATE_STORE} \
--node-count=2 \
--master-size=t2.micro \
--node-size=t2.micro \
--zones=ap-south-1a,ap-south-1b \
--name=${KOPS_CLUSTER_NAME} \
--dns private \
--master-count 1```

> us-east-2a,us-east-2b
> ap-south-1a, ap-south-1b

