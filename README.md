# Given task -

- [x] Best for us to assess your abilities is build of a boilerplate

- [x] Node/Express/Mongo. It is a realistic scenario where of course OS is at your disposal and 
shows your abilities for seeing the big picture

- [x] So what is this going to be assessed on? What counts is how you work out a fitting structure that keeps in mind: 
production ready and of scale 20xCRUD

- [x] Considerations: microservices, scalability (load). A validation model should be there and think about organization of modules

- [x] Needless to say that everyone has a boilerplate he/she already uses to create

- [x] Still, taking it serious is advised since this alone will serve as a comparison to other candidates and determine shortlist or not

- [x] It is a 48 hour submission so 16:00 IST Monday

# Description -

**As this is just a boilerplate I made some things simple.**

**Technologies used -**
* React JS
* Node JS/ Express JS
* Docker
* Kubernetes
* Ingress nginx
* Skaffold

> Docker containers and Kubernetes are used to achieve microservice architecture.
> Ingress nginx is used for Load balancing.

**Advantages -**
1. Other web frameworks or custom frameworks can be easily added as microservice. 
1. Easy development, management and scalability.
1. Kubernetes deployments restart if the pods crash.

## Microservices

*Assuming each microservice has its own database*

**Two types:**
1. **Synchronous** 1
In this type one microservice can directly communicate to other microservice.
The major downside to this approach is if one service get crashed the other services depending on it may crash too.

1. **Asynchronous** 2
**Two methods: **
  1. In the method 1, a microservice can send request throgh event bus. In this the downside is if one service gets crashed the other services depending on it may not work correctly but they don't get crashed  2a

  1. Method 2 is similar to method 1 but with a slight change. Assume 2 services, instead of request data directly from service 2, service 1 stores the data when the events happened in service 2 before. In this there is data duplication but now a days storage is very cheap. The main advantage here is if one service goes down other services can work correctly 2b

> Common sharable code is achieved by publishing code to NPM and then installing as a dependency in microservices. I think this is the best way to organize sharable code. Sharable code such as Validation models, error handling, and authentication etc can be published to NPM or in the common folder.

> Scaling servers - Horizontal or Vertical