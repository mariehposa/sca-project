# She Code Africa (SCA) Final Project

A three tier application (frontend, backend, database) deployed using Infrastructure as Code (IaC) and AWS.

* Frontend App
![image](https://user-images.githubusercontent.com/33374159/115548743-b976c300-a29f-11eb-9479-1f477e131f9a.png)

## Table of Content
1. [Getting started](#getting-started "Getting Started")
2. [Prerequisites](#prerequisites "Prerequisites")
3. [Enviroment variables](#enviroment-variables "Enviroment Variables")
4. [Installation](#installation "Installation")
   [Docker](#docker "Docker")
   [Terraform](#terraform "Terraform")
   [Ansible](#ansible "Ansible")
5. [Deployment](#deployment "Deployment")
6. [Tools and Technologies](#tools-and-technologies "Tools and Technologies")
7. [Author](#author "Author")
8. [Acknowledgments](#acknowledgments "Acknowledgments")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

To get started with this project you need a basic knowledge of the following.
```
Javascript (ES6)
Version Control (Git)
Docker
AWS
Terraform
Ansible
Jenkins
```

## Enviroment Variables
* After cloning the repository, in the project directory, `cd` into `sca-project/portfolio-backend`.
* Create a `.env` file and put the following variables in order for the app to function properly.

```
PORT=4000
NODE_ENV=development
```

### Installation
Below are the steps required in setting this project up. For more information about this, please refer to my [article]()
### Docker

* In the root folder of `portfolio-backend`, run `docker build -t image-name .` to build the dockerfile into docker image.
* Run `docker run image-name` to build a container from that image.
* Add tag to the docker image using `docker tag image-name docker_hub_username/repo-name:tag-name`.
* The run `docker push docker_hub_username/repo-name:tag-name` to push the docker image to your repo.
* Carry out the same process for the **portfolio-backend**.

### Terraform

* `cd` into `terraform/jenkins` and run `terraform init` to grab requirements for your AWS provider.
* Run `terraform plan` to verify that we've set it up correctly. It will later prompt for a value, enter the instance name, `jenkins`.
* Then run terraform `terraform apply` to spin up your ec2 instance. It will also prompt for a value, enter the instance name, `jenkins` and later enter `yes` to confirm.
* Carry out the same process for `terraform/backend` and `terraform/frontend`.
### Ansible

* To run ansible playbooks, `cd` into `ansible folder` and run the following commands one after the other:
- `ansible-playbook provision_jenkins.yaml`
- `ansible-playbook provision_frontend.yaml`
- `ansible-playbook provision_backend.yaml`

## Deployment

* The portfolio frontend was deployed [here](http://54.80.211.174:3000/)
* The portfolio backend was deployed [here](http://54.90.7.241:4000/)

## Tools and Technologies

* [AWS](https://aws.amazon.com/) - Cloud service provider.
* [Docker](https://www.docker.com/) - A tool for running applications.
* [Ansible](https://www.ansible.com/) - Configuration management tool.
* [Terraform](https://www.terraform.io/) - A tool for managing cloud services.
* [React](https://reactjs.org/) - The web framework used.
* [Styled-components](https://www.styled-components.com/) - Used to generate styles.
* [Formik](https://jaredpalmer.com/formik) - Component that helps with building forms.
* [Node.js](https://nodejs.org/en/)- Javascript Runtime Engine.
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Knex](http://knexjs.org/) - is a SQL query builder for Postgres, SQLite3, etc, designed to be flexible, portable, and fun to use.
* [Postgresql](https://www.postgresql.org/) - A open source object-relational database system.

## Author

* [Mariam Adedeji](https://github.com/mariehposa)

## Acknowledgments

* She Code Africa
* Deimos