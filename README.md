# She Code Africa (SCA) Final Project

A three tier application (frontend, backend, database) by applying acquired IaaC and configuration management knowledge to AWS.

* Frontend App
![image](https://user-images.githubusercontent.com/33374159/73931951-8da93080-48d9-11ea-9792-f7c458007dfa.png)

## Table of Content
1. [Getting started](#getting-started "Getting Started")
* [Prerequisites](#prerequisites "Prerequisites")
* [Installation](#installation "Installation")
* [Enviroment variables](#enviroment-variables "Enviroment Variables")
2. [Running the tests](#running-the-tests " Running the tests")
* [Break down into end to end tests](#break-down-into-end-to-end-tests "Break down into end to end tests")
3. [Deployment](#deployment "Deployment")
4. [Technology stack](#technology-stack "Technology Stack")
5. [Contributing](#contributing "Contributing")
6. [Versioning](#versioning "Versioning")
7. [Authors](#authors "Authors")
8. [License](#license "License")
9. [Acknowledgments](#acknowledgments "Acknowledgments")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

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

### Enviroment Variables
* After cloning the repository, in the project directory, `cd` into `sca-project`, then `cd` into `portfolio-backend`.
* Create a `.env` file and put the following variables in order for app to function correctly.

```
PORT=4000
NODE_ENV=development
```

### Installation

* Go back to the root folder of `sca-project` and run `docker-compose up -d` to build the docker container.

### Docker
* In the root folder of `portfolio-backend`, run `docker build -t image-name .` to build the dockerfile into docker image.
* Run `docker run image-name` to build a container from that image.
* After that, create a repository on docker hub.
* Go back to the root folder of `portfolio-backend`, and add tag to the docker image using `docker tag image-name docker_hub_username/repo-name:tag-name`.
* The run `docker push docker_hub_username/repo-name:tag-name` to push your docker image to the repository.
* Carry out the previous process for the **portfolio-backend**.

### AWS
* Install (AWS CLI)[] and (aws-vault)[] on your terminal.
* Login to your AWS account, or create one if you haven't already.
* To create a user, go to **Services**, then click on **IAM**. Click on **User**, then **Add a user**.
* Add a **User name**, then select **Programmatic access** for AWS access type.
* To create group for your user, click on **Create group** and give it **Administrator access**.
* You can add **Tags** (optional), click **Next** to review the user details and then click on **Create user**.
* After that, this would show a new screen to download the user security credentials. Click on **Download.csv**.
* Go back to the terminal and enter `aws-configure`. Add the user **Access key ID** and **Secret Access Key** as prompted. Then enter your **AWS region** and **json** for output.
* Run `aws-vault add username`. The `username` should be user created previously on AWS console.
* Add the user **Access key ID** and **Secret Access Key** as prompted.
* The run `aws-vault exec username`.
### Terraform
* To run terraform, make sure you've installed (Terraform)[] on your terminal.
* `cd` into `terraform/jenkins` and delete all files and folder inside terraform except `main.tf`.
* Inside the `main.tf` edit the **region**, **ami**, **instance_type**, and **key_name** values to your aws credentials respectively.
* Run `terraform init` to grab requirements for your AWS provider.
* After that, run `terraform plan` to verify that we've set it up correctly. It will later prompt for a value, enter the instance name, `jenkins`.
* Then run terraform `terraform apply` to spin up your ec2 instance. It will also prompt for a value, enter the instance name, `jenkins` and later enter `yes` to confirm.
* Carry out the same process for `terraform/backend` and `terraform/frontend`.
* Now we need to create two security groups for the instances.
* For jenkins instance, Go to security groups and click on Create new security groups, add name and description. For the inbound rules, select All traffic for type and My IP for source.
* For backend and frontend instance, follow the same process as that of jenkins security group except we add more **Inbound rules** to it. Select HTTP and source should be 0.0.0.0/0, another HTTP and source should be ::/0, then SSH and source should be My IP.
* Go back the instance and attach their security group to them respectively. Select instance > Actions > Security > Change security groups > click on the search field and choose the security group, then Save.
### Ansible
* Install (Ansible)[] on your terminal, if you haven't done that already.
* Run `sudo vim /home/username/.ansible.cfg` and insert the following:
```
[defaults]
host_key_checking = False
private_key_file=~/.ssh/admin.pem
inventory=/etc/ansible/hosts
remote_user = ubuntu

[ssh_connection]
control_path=%(directory)s/%%h-%%r
control_path_dir=~/.ansible/cp
#pipelining = True
scp_if_ssh = True
```
* Run `sudo vim /etc/ansible/hosts` to add the instances and key-pair in this format:
```
[jenkins]                                                                                                                                                                                                                                                                                         <public IPv4 DNS> ansible_ssh_private_key_file=<path-to-key>
```