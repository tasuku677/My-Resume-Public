# Overview 
 created my personal resume website, which is hosted on a highly reliable AWS EC2 Ubuntu server instance. During the development process, I extensively utilized browser developer tools to analyze and monitor network traffic, focusing on internal HTTP request and response handling as well as performance metrics. The server was configured using NGINX to serve the website's content, while firewall settings were managed with UFW to open ports for HTTP, HTTPS, and SSH traffic. Remote management of the server was facilitated through SSH, enabling seamless execution of shell commands from my local computer. To maintain consistency, I synchronized the website's codebase between my local development environment and the production server using a GitHub repository, supplemented by SFTP for handling large, static non-code files. Additionally, I registered the domain for the website and configured it to point to the EC2 server's IP address, with DNS configurations managed through the domain registrar. Subdomains were established to categorize different sections of the resume site, each configured within NGINX settings to appropriately route traffic. To enhance security, HTTPS was implemented using certificates obtained from Let's Encrypt and Certbot, ensuring all connections to the site were encrypted, authenticated, and safeguarding the integrity of user data.
# Objectives
- Understand how Client-Server models work in the World Wide Web.
- Understand the HTTP protocol for both HTTP requests clients make, and HTTP response a web server makes.
- Use cloud virtual machines as the main web server infrastructure for its high engineer usability and high reliability.
- Create your own production web servers environment that processes HTTP requests.
- Setup static resources a web server will serve like web pages and media files.
- Understand SSH connections to securely connect to a web servers.
- Develop and release code that syncs with both local and production environments.
- Gain some level of devops and CI/CD experience.
- Understand and use SFTP to securely manage a web server's stored files.
- Learn about domains and how domains resolve internally across a DNS (Domain Name System) network.
- Use a domain registar to register a domain and setup the domain name, so it resolves to the IP of your production web server.
- Setup subdomains and allow the same server to handle multiple subdomains.
- Create secure HTTP connections (HTTPS) by understand TLS/SSL and creating signed certificates to allow for HTTPS connections.

# Methodology Per Project
- Use the browser developer tools to see network information, including sent HTTP request and received HTTP responses headers and bodies.
-  Use Amazon Web Services (AWS)'s EC2 service to create an Ubuntu server instance, which offers high usability, reliability and all the infrastructure needed for cloud virtual machines.
- Install NGINX and configure its .conf files to deploy a web server that listens to incoming HTTP requests and response with resource files accordingly.
- Configure a server's firewall settings using uncomplicated firewall (ufw) to open up ports 80 (HTTP), 443 (HTTPS) and 22 (OpenSSH).
- Connect to EC2 instances using SSH in order to run shell commands on the server from a local computer.
- Sync local code with the production server by using github repository, doing push origin commands on local and pull commands on the production server across SSH.
- Large static files that are not code are ignored by git version control and instead SFTP connections are used to manage these files across local and production environments.
- Lease and register and domain using a domain registar.
- Setup DNS settings offered by the domain registar to setup A records so the domain points to the EC2 IP address.
- Setup subdomains by registering subdomain A records, and on the server configuring NGINX .conf files and symlinks to handle the resources for paths accross multiple subdomains accordingly.
- Use LetsEncrypt and certbot to create certificates, and then configure nginx .conf files to only allow for secure connections (HTTPS) which provide security measures like HTTP encryption, authenticity and integrity.
