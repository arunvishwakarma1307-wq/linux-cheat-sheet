const COMMANDS = [
  {
    category: "Docker",
    command: "docker --version",
    what: "Displays the installed Docker version.",
    when: "To verify Docker installation.",
    example: "docker --version"
  },
  {
    category: "Docker",
    command: "docker pull",
    what: "Downloads a Docker image from Docker Hub.",
    when: "Before running a container.",
    example: "docker pull nginx"
  },
  {
    category: "Docker",
    command: "docker ps",
    what: "Shows all currently running Docker containers.",
    when: "To check running containers.",
    example: "docker ps"
  },
  {
  category: "Docker",
  command: "docker run",
  what: "Creates and starts a new container from a Docker image.",
  when: "To run an application inside a Docker container.",
  example: "docker run nginx"
  },
  {
  category: "Docker",
  command: "docker images",
  what: "Displays all Docker images stored on your local machine.",
  when: "To check which Docker images are available before creating containers.",
  example: "docker images"
  },
  {
  category: "Docker",
  command: "docker ps -a",
  what: "Displays all Docker containers, including running, stopped, and exited containers.",
  when: "To view every container and check its current status.",
  example: "docker ps -a"
  },
  {
  category: "Docker",
  command: "docker compose down",
  what: "Stops and removes all containers created by Docker Compose.",
  when: "When you want to stop the complete application stack.",
  example: "docker compose down"
},

{
  category: "Docker",
  command: "docker inspect",
  what: "Displays detailed information about a container or image.",
  when: "To troubleshoot or inspect Docker objects.",
  example: "docker inspect my-container"
},

{
  category: "Docker",
  command: "docker system prune",
  what: "Removes unused containers, networks, images, and cache.",
  when: "To free disk space.",
  example: "docker system prune"
},

{
  category: "Docker",
  command: "docker network ls",
  what: "Lists all Docker networks.",
  when: "To view available Docker networks.",
  example: "docker network ls"
},

{
  category: "Docker",
  command: "docker volume ls",
  what: "Lists all Docker volumes.",
  when: "To check existing Docker volumes.",
  example: "docker volume ls"
},

{
  category: "Docker",
  command: "docker tag",
  what: "Creates a new tag for an existing Docker image.",
  when: "Before pushing an image to a registry.",
  example: "docker tag my-app myrepo/my-app:v1"
},

{
  category: "Docker",
  command: "docker push",
  what: "Uploads a Docker image to a container registry.",
  when: "After tagging an image for sharing.",
  example: "docker push myrepo/my-app:v1"
}, 
  
  /* Docker Commands End */

  {
  category: "File & Directory",
  command: "pwd",
  what: "Displays the full path of the current working directory.",
  when: "To know your current location in the Linux file system.",
  example: "pwd"
},

{
  category: "File & Directory",
  command: "ls",
  what: "Lists files and directories in the current location.",
  when: "To view the contents of a directory.",
  example: "ls"
},

{
  category: "File & Directory",
  command: "ls -l",
  what: "Displays files and directories in long listing format with permissions, owner, size, and date.",
  when: "To view detailed information about files.",
  example: "ls -l"
},

{
  category: "File & Directory",
  command: "ls -a",
  what: "Shows all files including hidden files.",
  when: "To view hidden files and directories.",
  example: "ls -a"
},

{
  category: "File & Directory",
  command: "cd",
  what: "Changes the current working directory.",
  when: "To move between directories.",
  example: "cd Documents"
},

{
  category: "File & Directory",
  command: "cd ..",
  what: "Moves to the parent directory.",
  when: "To go one level up in the directory structure.",
  example: "cd .."
},

{
  category: "File & Directory",
  command: "mkdir",
  what: "Creates a new directory.",
  when: "To create a folder.",
  example: "mkdir project"
},

{
  category: "File & Directory",
  command: "rmdir",
  what: "Removes an empty directory.",
  when: "To delete an empty folder.",
  example: "rmdir project"
},

{
  category: "File & Directory",
  command: "rm",
  what: "Deletes a file.",
  when: "To remove unwanted files.",
  example: "rm file.txt"
},

{
  category: "File & Directory",
  command: "rm -r",
  what: "Deletes a directory and all of its contents recursively.",
  when: "To remove a folder containing files.",
  example: "rm -r project"
},

{
  category: "File & Directory",
  command: "cp",
  what: "Copies files or directories.",
  when: "To create a duplicate of a file or folder.",
  example: "cp file.txt backup.txt"
},

{
  category: "File & Directory",
  command: "mv",
  what: "Moves or renames files and directories.",
  when: "To rename or move files and folders.",
  example: "mv old.txt new.txt"
},

{
  category: "File & Directory",
  command: "touch",
  what: "Creates a new empty file.",
  when: "To create a file quickly.",
  example: "touch notes.txt"
},

{
  category: "File & Directory",
  command: "tree",
  what: "Displays directories and files in a tree-like structure.",
  when: "To visualize the folder hierarchy.",
  example: "tree"
},

{
  category: "File & Directory",
  command: "clear",
  what: "Clears the terminal screen.",
  when: "To clean the terminal window.",
  example: "clear"
},

{
  category: "File & Directory",
  command: "history",
  what: "Displays the list of previously executed commands.",
  when: "To view command history.",
  example: "history"
},

{
  category: "File & Directory",
  command: "exit",
  what: "Closes the current terminal session.",
  when: "To exit the terminal.",
  example: "exit"
},

/* File & Directory Commands End */

{
  category: "User",
  command: "whoami",
  what: "Displays the username of the currently logged-in user.",
  when: "To check which user account is currently active.",
  example: "whoami"
},

{
  category: "User",
  command: "who",
  what: "Shows all users currently logged into the system.",
  when: "To see who is using the system.",
  example: "who"
},

{
  category: "User",
  command: "id",
  what: "Displays user ID (UID), group ID (GID), and group membership.",
  when: "To check user identity and permissions.",
  example: "id"
},

{
  category: "User",
  command: "groups",
  what: "Displays all groups the current user belongs to.",
  when: "To check user group membership.",
  example: "groups"
},

{
  category: "User",
  command: "passwd",
  what: "Changes the password of the current user.",
  when: "To update your account password.",
  example: "passwd"
},

{
  category: "User",
  command: "sudo",
  what: "Executes a command with administrator (root) privileges.",
  when: "When administrative permission is required.",
  example: "sudo apt update"
},

{
  category: "User",
  command: "su",
  what: "Switches to another user account.",
  when: "To log in as another user, usually root.",
  example: "su"
},

{
  category: "User",
  command: "adduser",
  what: "Creates a new user account.",
  when: "To add a new user to the system.",
  example: "sudo adduser john"
},

{
  category: "User",
  command: "userdel",
  what: "Deletes an existing user account.",
  when: "To remove a user from the system.",
  example: "sudo userdel john"
},

{
  category: "User",
  command: "usermod",
  what: "Modifies an existing user account.",
  when: "To change user settings like groups or home directory.",
  example: "sudo usermod -aG docker john"
},

{
  category: "User",
  command: "chown",
  what: "Changes the owner of a file or directory.",
  when: "To transfer file ownership.",
  example: "sudo chown user:user file.txt"
},

{
  category: "User",
  command: "chmod",
  what: "Changes file or directory permissions.",
  when: "To grant or restrict read, write, and execute permissions.",
  example: "chmod 755 script.sh"
},

 /* User Commands End */

{
  category: "Network",
  command: "ifconfig",
  what: "Displays and configures network interfaces.",
  when: "To view IP addresses and network interface information.",
  example: "ifconfig"
},

{
  category: "Network",
  command: "ip addr",
  what: "Displays IP address information for all network interfaces.",
  when: "To check the current IP configuration.",
  example: "ip addr"
},

{
  category: "Network",
  command: "ping",
  what: "Checks connectivity between your system and another host.",
  when: "To test whether a server or website is reachable.",
  example: "ping google.com"
},

{
  category: "Network",
  command: "hostname",
  what: "Displays the hostname of the current system.",
  when: "To identify the computer on a network.",
  example: "hostname"
},

{
  category: "Network",
  command: "hostname -I",
  what: "Displays the local IP address of the system.",
  when: "To quickly find your machine's IP address.",
  example: "hostname -I"
},

{
  category: "Network",
  command: "netstat",
  what: "Displays active network connections, routing tables, and listening ports.",
  when: "To troubleshoot network connections.",
  example: "netstat -tuln"
},

{
  category: "Network",
  command: "ss",
  what: "Displays socket statistics and active network connections.",
  when: "As a modern replacement for netstat.",
  example: "ss -tuln"
},

{
  category: "Network",
  command: "curl",
  what: "Transfers data to or from a server using supported protocols.",
  when: "To test APIs or download web content.",
  example: "curl https://example.com"
},

{
  category: "Network",
  command: "wget",
  what: "Downloads files from the internet.",
  when: "To download files directly from a URL.",
  example: "wget https://example.com/file.zip"
},

{
  category: "Network",
  command: "traceroute",
  what: "Shows the route packets take to reach a destination.",
  when: "To troubleshoot network routing problems.",
  example: "traceroute google.com"
},

{
  category: "Network",
  command: "nslookup",
  what: "Queries DNS servers for domain name information.",
  when: "To check DNS records of a domain.",
  example: "nslookup google.com"
},

{
  category: "Network",
  command: "dig",
  what: "Performs detailed DNS lookups.",
  when: "To troubleshoot DNS issues.",
  example: "dig google.com"
},

/* Network Commands End */

{
  category: "Process",
  command: "ps",
  what: "Displays the currently running processes.",
  when: "To check active processes.",
  example: "ps"
},

{
  category: "Process",
  command: "ps -ef",
  what: "Displays all running processes in full format.",
  when: "To view every running process on the system.",
  example: "ps -ef"
},

{
  category: "Process",
  command: "top",
  what: "Displays real-time information about CPU, memory, and running processes.",
  when: "To monitor system performance live.",
  example: "top"
},

{
  category: "Process",
  command: "htop",
  what: "Interactive process viewer with a user-friendly interface.",
  when: "To monitor and manage processes easily.",
  example: "htop"
},

{
  category: "Process",
  command: "kill",
  what: "Terminates a process using its Process ID (PID).",
  when: "To stop an unresponsive process.",
  example: "kill 1234"
},

{
  category: "Process",
  command: "kill -9",
  what: "Forcefully terminates a process.",
  when: "When a process does not stop normally.",
  example: "kill -9 1234"
},

{
  category: "Process",
  command: "pkill",
  what: "Kills processes by their name.",
  when: "To stop all processes with the same name.",
  example: "pkill firefox"
},

{
  category: "Process",
  command: "jobs",
  what: "Lists background jobs in the current shell.",
  when: "To check running background tasks.",
  example: "jobs"
},

{
  category: "Process",
  command: "bg",
  what: "Resumes a stopped job in the background.",
  when: "To continue a paused background job.",
  example: "bg"
},

{
  category: "Process",
  command: "fg",
  what: "Brings a background job to the foreground.",
  when: "To interact with a background process.",
  example: "fg"
},

{
  category: "Process",
  command: "nice",
  what: "Starts a process with a specified priority.",
  when: "To control CPU priority for a process.",
  example: "nice -n 10 program"
},

{
  category: "Process",
  command: "renice",
  what: "Changes the priority of an already running process.",
  when: "To adjust process priority after it has started.",
  example: "renice 5 -p 1234"
},

/* Process Commands End */

{
  category: "Disk",
  command: "df",
  what: "Displays disk space usage of mounted file systems.",
  when: "To check available and used disk space.",
  example: "df"
},

{
  category: "Disk",
  command: "df -h",
  what: "Displays disk usage in a human-readable format (KB, MB, GB).",
  when: "To easily understand storage usage.",
  example: "df -h"
},

{
  category: "Disk",
  command: "du",
  what: "Displays the disk usage of files and directories.",
  when: "To check how much space a directory is using.",
  example: "du"
},

{
  category: "Disk",
  command: "du -sh",
  what: "Displays the total size of a directory in a human-readable format.",
  when: "To quickly check folder size.",
  example: "du -sh Documents"
},

{
  category: "Disk",
  command: "fdisk -l",
  what: "Lists all disk partitions.",
  when: "To view partition information.",
  example: "sudo fdisk -l"
},

{
  category: "Disk",
  command: "lsblk",
  what: "Lists all available block storage devices.",
  when: "To identify disks and partitions.",
  example: "lsblk"
},

{
  category: "Disk",
  command: "mount",
  what: "Displays or mounts file systems.",
  when: "To attach a storage device.",
  example: "mount /dev/sdb1 /mnt"
},

{
  category: "Disk",
  command: "umount",
  what: "Unmounts a mounted file system.",
  when: "Before safely removing a storage device.",
  example: "umount /mnt"
},

{
  category: "Disk",
  command: "free",
  what: "Displays RAM and swap memory usage.",
  when: "To check system memory.",
  example: "free"
},

{
  category: "Disk",
  command: "free -h",
  what: "Displays memory usage in a human-readable format.",
  when: "To easily read RAM usage.",
  example: "free -h"
},

{
  category: "Disk",
  command: "sync",
  what: "Flushes cached data to disk.",
  when: "Before shutting down or removing storage.",
  example: "sync"
},

{
  category: "Disk",
  command: "blkid",
  what: "Displays UUID and filesystem information of block devices.",
  when: "To identify partitions and file systems.",
  example: "sudo blkid"
},

/* Disk Commands End */

{
  category: "Git",
  command: "git --version",
  what: "Displays the installed Git version.",
  when: "To verify Git installation.",
  example: "git --version"
},

{
  category: "Git",
  command: "git config --global user.name",
  what: "Sets your Git username.",
  when: "After installing Git for the first time.",
  example: 'git config --global user.name "Arun Vishwakarma"'
},

{
  category: "Git",
  command: "git config --global user.email",
  what: "Sets your Git email address.",
  when: "After installing Git for the first time.",
  example: 'git config --global user.email "example@gmail.com"'
},

{
  category: "Git",
  command: "git init",
  what: "Initializes a new Git repository.",
  when: "To start version control in a project.",
  example: "git init"
},

{
  category: "Git",
  command: "git clone",
  what: "Copies an existing Git repository.",
  when: "To download a remote project.",
  example: "git clone https://github.com/user/repo.git"
},

{
  category: "Git",
  command: "git status",
  what: "Shows the current status of the repository.",
  when: "Before committing changes.",
  example: "git status"
},

{
  category: "Git",
  command: "git add .",
  what: "Stages all modified files.",
  when: "Before creating a commit.",
  example: "git add ."
},

{
  category: "Git",
  command: "git add filename",
  what: "Stages a specific file.",
  when: "To commit only selected files.",
  example: "git add index.html"
},

{
  category: "Git",
  command: "git commit -m",
  what: "Creates a commit with a message.",
  when: "After staging files.",
  example: 'git commit -m "Initial commit"'
},

{
  category: "Git",
  command: "git log",
  what: "Displays commit history.",
  when: "To view previous commits.",
  example: "git log"
},

{
  category: "Git",
  command: "git log --oneline",
  what: "Displays a compact commit history.",
  when: "To quickly review commits.",
  example: "git log --oneline"
},

{
  category: "Git",
  command: "git diff",
  what: "Shows changes made to files.",
  when: "Before staging or committing.",
  example: "git diff"
},

{
  category: "Git",
  command: "git branch",
  what: "Lists all branches.",
  when: "To check available branches.",
  example: "git branch"
},

{
  category: "Git",
  command: "git checkout",
  what: "Switches to another branch.",
  when: "To work on a different branch.",
  example: "git checkout main"
},

{
  category: "Git",
  command: "git checkout -b",
  what: "Creates and switches to a new branch.",
  when: "To start new feature development.",
  example: "git checkout -b feature-login"
},

{
  category: "Git",
  command: "git merge",
  what: "Merges one branch into another.",
  when: "To combine completed work.",
  example: "git merge feature-login"
},

{
  category: "Git",
  command: "git remote -v",
  what: "Displays configured remote repositories.",
  when: "To verify remote URLs.",
  example: "git remote -v"
},

{
  category: "Git",
  command: "git push",
  what: "Uploads commits to the remote repository.",
  when: "After committing changes.",
  example: "git push origin main"
},

{
  category: "Git",
  command: "git pull",
  what: "Downloads and merges changes from the remote repository.",
  when: "Before starting new work.",
  example: "git pull origin main"
},

{
  category: "Git",
  command: "git fetch",
  what: "Downloads updates from the remote repository without merging.",
  when: "To check remote changes safely.",
  example: "git fetch"
},

{
  category: "Git",
  command: "git reset --hard",
  what: "Resets the repository to a previous state and discards changes.",
  when: "To completely undo local changes.",
  example: "git reset --hard HEAD"
},

{
  category: "Git",
  command: "git stash",
  what: "Temporarily saves uncommitted changes.",
  when: "Before switching branches.",
  example: "git stash"
},

{
  category: "Git",
  command: "git stash pop",
  what: "Restores the most recently stashed changes.",
  when: "To continue previous work.",
  example: "git stash pop"
},

/* Git Commands End */

{
  category: "Git",
  command: "git --version",
  what: "Displays the installed Git version.",
  when: "To verify Git installation.",
  example: "git --version"
},

{
  category: "Git",
  command: "git config --global user.name",
  what: "Sets your Git username.",
  when: "After installing Git for the first time.",
  example: 'git config --global user.name "Arun Vishwakarma"'
},

{
  category: "Git",
  command: "git config --global user.email",
  what: "Sets your Git email address.",
  when: "After installing Git for the first time.",
  example: 'git config --global user.email "example@gmail.com"'
},

{
  category: "Git",
  command: "git init",
  what: "Initializes a new Git repository.",
  when: "To start version control in a project.",
  example: "git init"
},

{
  category: "Git",
  command: "git clone",
  what: "Copies an existing Git repository.",
  when: "To download a remote project.",
  example: "git clone https://github.com/user/repo.git"
},

{
  category: "Git",
  command: "git status",
  what: "Shows the current status of the repository.",
  when: "Before committing changes.",
  example: "git status"
},

{
  category: "Git",
  command: "git add .",
  what: "Stages all modified files.",
  when: "Before creating a commit.",
  example: "git add ."
},

{
  category: "Git",
  command: "git add filename",
  what: "Stages a specific file.",
  when: "To commit only selected files.",
  example: "git add index.html"
},

{
  category: "Git",
  command: "git commit -m",
  what: "Creates a commit with a message.",
  when: "After staging files.",
  example: 'git commit -m "Initial commit"'
},

{
  category: "Git",
  command: "git log",
  what: "Displays commit history.",
  when: "To view previous commits.",
  example: "git log"
},

{
  category: "Git",
  command: "git log --oneline",
  what: "Displays a compact commit history.",
  when: "To quickly review commits.",
  example: "git log --oneline"
},

{
  category: "Git",
  command: "git diff",
  what: "Shows changes made to files.",
  when: "Before staging or committing.",
  example: "git diff"
},

{
  category: "Git",
  command: "git branch",
  what: "Lists all branches.",
  when: "To check available branches.",
  example: "git branch"
},

{
  category: "Git",
  command: "git checkout",
  what: "Switches to another branch.",
  when: "To work on a different branch.",
  example: "git checkout main"
},

{
  category: "Git",
  command: "git checkout -b",
  what: "Creates and switches to a new branch.",
  when: "To start new feature development.",
  example: "git checkout -b feature-login"
},

{
  category: "Git",
  command: "git merge",
  what: "Merges one branch into another.",
  when: "To combine completed work.",
  example: "git merge feature-login"
},

{
  category: "Git",
  command: "git remote -v",
  what: "Displays configured remote repositories.",
  when: "To verify remote URLs.",
  example: "git remote -v"
},

{
  category: "Git",
  command: "git push",
  what: "Uploads commits to the remote repository.",
  when: "After committing changes.",
  example: "git push origin main"
},

{
  category: "Git",
  command: "git pull",
  what: "Downloads and merges changes from the remote repository.",
  when: "Before starting new work.",
  example: "git pull origin main"
},

{
  category: "Git",
  command: "git fetch",
  what: "Downloads updates from the remote repository without merging.",
  when: "To check remote changes safely.",
  example: "git fetch"
},

{
  category: "Git",
  command: "git reset --hard",
  what: "Resets the repository to a previous state and discards changes.",
  when: "To completely undo local changes.",
  example: "git reset --hard HEAD"
},

{
  category: "Git",
  command: "git stash",
  what: "Temporarily saves uncommitted changes.",
  when: "Before switching branches.",
  example: "git stash"
},

{
  category: "Git",
  command: "git stash pop",
  what: "Restores the most recently stashed changes.",
  when: "To continue previous work.",
  example: "git stash pop"
},

{
  category: "Kubernetes",
  command: "kubectl version",
  what: "Displays the kubectl client and Kubernetes server version.",
  when: "To verify kubectl installation and cluster version.",
  example: "kubectl version"
},

{
  category: "Kubernetes",
  command: "kubectl cluster-info",
  what: "Displays information about the Kubernetes cluster.",
  when: "To verify the cluster is running.",
  example: "kubectl cluster-info"
},

{
  category: "Kubernetes",
  command: "kubectl get nodes",
  what: "Lists all nodes in the cluster.",
  when: "To check node status.",
  example: "kubectl get nodes"
},

{
  category: "Kubernetes",
  command: "kubectl get pods",
  what: "Lists all running Pods.",
  when: "To check Pod status.",
  example: "kubectl get pods"
},

{
  category: "Kubernetes",
  command: "kubectl get services",
  what: "Lists all Services.",
  when: "To view available Services.",
  example: "kubectl get services"
},

{
  category: "Kubernetes",
  command: "kubectl get deployments",
  what: "Lists all Deployments.",
  when: "To check application deployments.",
  example: "kubectl get deployments"
},

{
  category: "Kubernetes",
  command: "kubectl describe pod",
  what: "Displays detailed information about a Pod.",
  when: "To troubleshoot Pod issues.",
  example: "kubectl describe pod nginx-pod"
},

{
  category: "Kubernetes",
  command: "kubectl logs",
  what: "Displays logs of a Pod.",
  when: "To debug application problems.",
  example: "kubectl logs nginx-pod"
},

{
  category: "Kubernetes",
  command: "kubectl exec -it",
  what: "Opens an interactive shell inside a running Pod.",
  when: "To inspect or troubleshoot containers.",
  example: "kubectl exec -it nginx-pod -- bash"
},

{
  category: "Kubernetes",
  command: "kubectl apply -f",
  what: "Creates or updates resources from a YAML file.",
  when: "To deploy Kubernetes resources.",
  example: "kubectl apply -f deployment.yaml"
},

{
  category: "Kubernetes",
  command: "kubectl delete -f",
  what: "Deletes resources defined in a YAML file.",
  when: "To remove deployed resources.",
  example: "kubectl delete -f deployment.yaml"
},

{
  category: "Kubernetes",
  command: "kubectl delete pod",
  what: "Deletes a specific Pod.",
  when: "To remove or restart a Pod.",
  example: "kubectl delete pod nginx-pod"
},

{
  category: "Kubernetes",
  command: "kubectl scale deployment",
  what: "Scales the number of Pod replicas.",
  when: "To increase or decrease application instances.",
  example: "kubectl scale deployment nginx --replicas=3"
},

{
  category: "Kubernetes",
  command: "kubectl rollout status",
  what: "Displays the rollout status of a Deployment.",
  when: "After updating a Deployment.",
  example: "kubectl rollout status deployment/nginx"
},

{
  category: "Kubernetes",
  command: "kubectl rollout restart",
  what: "Restarts a Deployment.",
  when: "To restart Pods without deleting the Deployment.",
  example: "kubectl rollout restart deployment/nginx"
},

{
  category: "Kubernetes",
  command: "kubectl config view",
  what: "Displays the current kubeconfig configuration.",
  when: "To inspect cluster configuration.",
  example: "kubectl config view"
},

{
  category: "Kubernetes",
  command: "kubectl config current-context",
  what: "Displays the current Kubernetes context.",
  when: "To verify which cluster is active.",
  example: "kubectl config current-context"
},

{
  category: "Kubernetes",
  command: "minikube start",
  what: "Starts a local Kubernetes cluster using Minikube.",
  when: "Before working with Kubernetes locally.",
  example: "minikube start"
},

{
  category: "Kubernetes",
  command: "minikube stop",
  what: "Stops the Minikube cluster.",
  when: "When you no longer need the cluster.",
  example: "minikube stop"
},

{
  category: "Kubernetes",
  command: "minikube status",
  what: "Displays the current status of the Minikube cluster.",
  when: "To verify whether Minikube is running.",
  example: "minikube status"
},

/* Kubernetes Commands End */

{
  category: "Terraform",
  command: "terraform version",
  what: "Displays the installed Terraform version.",
  when: "To verify Terraform installation.",
  example: "terraform version"
},

{
  category: "Terraform",
  command: "terraform init",
  what: "Initializes a Terraform working directory.",
  when: "Before running any Terraform configuration.",
  example: "terraform init"
},

{
  category: "Terraform",
  command: "terraform validate",
  what: "Validates the Terraform configuration files.",
  when: "To check for syntax errors before deployment.",
  example: "terraform validate"
},

{
  category: "Terraform",
  command: "terraform fmt",
  what: "Formats Terraform configuration files.",
  when: "To keep Terraform code clean and readable.",
  example: "terraform fmt"
},

{
  category: "Terraform",
  command: "terraform plan",
  what: "Shows the execution plan without making changes.",
  when: "Before applying infrastructure changes.",
  example: "terraform plan"
},

{
  category: "Terraform",
  command: "terraform apply",
  what: "Creates or updates infrastructure.",
  when: "After reviewing the execution plan.",
  example: "terraform apply"
},

{
  category: "Terraform",
  command: "terraform destroy",
  what: "Removes all resources managed by Terraform.",
  when: "To delete infrastructure when no longer needed.",
  example: "terraform destroy"
},

{
  category: "Terraform",
  command: "terraform show",
  what: "Displays the current Terraform state.",
  when: "To inspect managed infrastructure.",
  example: "terraform show"
},

{
  category: "Terraform",
  command: "terraform output",
  what: "Displays output variables defined in the configuration.",
  when: "To retrieve resource information.",
  example: "terraform output"
},

{
  category: "Terraform",
  command: "terraform state list",
  what: "Lists all resources stored in the Terraform state file.",
  when: "To view managed resources.",
  example: "terraform state list"
},

{
  category: "Terraform",
  command: "terraform workspace list",
  what: "Lists all Terraform workspaces.",
  when: "To manage multiple environments.",
  example: "terraform workspace list"
},

{
  category: "Terraform",
  command: "terraform workspace select",
  what: "Switches to a different Terraform workspace.",
  when: "To work with another environment.",
  example: "terraform workspace select dev"
},

/* Terraform Commands End */

{
  category: "Ansible",
  command: "ansible --version",
  what: "Displays the installed Ansible version.",
  when: "To verify Ansible installation.",
  example: "ansible --version"
},

{
  category: "Ansible",
  command: "ansible all -m ping",
  what: "Tests connectivity to all managed hosts.",
  when: "To verify that Ansible can reach remote machines.",
  example: "ansible all -m ping"
},

{
  category: "Ansible",
  command: "ansible-inventory --list",
  what: "Displays the complete inventory in JSON format.",
  when: "To verify configured hosts.",
  example: "ansible-inventory --list"
},

{
  category: "Ansible",
  command: "ansible-playbook",
  what: "Executes an Ansible playbook.",
  when: "To automate configuration and deployment tasks.",
  example: "ansible-playbook playbook.yml"
},

{
  category: "Ansible",
  command: "ansible-playbook --check",
  what: "Runs a playbook in dry-run mode.",
  when: "To preview changes before applying them.",
  example: "ansible-playbook playbook.yml --check"
},

{
  category: "Ansible",
  command: "ansible-playbook --syntax-check",
  what: "Checks a playbook for syntax errors.",
  when: "Before executing a playbook.",
  example: "ansible-playbook playbook.yml --syntax-check"
},

{
  category: "Ansible",
  command: "ansible-doc",
  what: "Displays documentation for Ansible modules.",
  when: "To learn how a module works.",
  example: "ansible-doc copy"
},

{
  category: "Ansible",
  command: "ansible-galaxy install",
  what: "Installs Ansible roles from Ansible Galaxy.",
  when: "To reuse community-created roles.",
  example: "ansible-galaxy install geerlingguy.nginx"
},

{
  category: "Ansible",
  command: "ansible-vault create",
  what: "Creates an encrypted Ansible Vault file.",
  when: "To securely store passwords and secrets.",
  example: "ansible-vault create secrets.yml"
},

{
  category: "Ansible",
  command: "ansible-vault edit",
  what: "Edits an encrypted Ansible Vault file.",
  when: "To modify stored secrets.",
  example: "ansible-vault edit secrets.yml"
},

{
  category: "Ansible",
  command: "ansible-vault decrypt",
  what: "Decrypts an Ansible Vault file.",
  when: "To access encrypted content.",
  example: "ansible-vault decrypt secrets.yml"
},

{
  category: "Ansible",
  command: "ansible-config dump",
  what: "Displays the current Ansible configuration.",
  when: "To verify active configuration settings.",
  example: "ansible-config dump"
},

/* Ansible Commands End */

{
  category: "Jenkins",
  command: "jenkins --version",
  what: "Displays the installed Jenkins version.",
  when: "To verify Jenkins installation.",
  example: "jenkins --version"
},

{
  category: "Jenkins",
  command: "systemctl start jenkins",
  what: "Starts the Jenkins service.",
  when: "To start Jenkins on Linux.",
  example: "sudo systemctl start jenkins"
},

{
  category: "Jenkins",
  command: "systemctl stop jenkins",
  what: "Stops the Jenkins service.",
  when: "To stop Jenkins safely.",
  example: "sudo systemctl stop jenkins"
},

{
  category: "Jenkins",
  command: "systemctl restart jenkins",
  what: "Restarts the Jenkins service.",
  when: "After changing Jenkins configuration.",
  example: "sudo systemctl restart jenkins"
},

{
  category: "Jenkins",
  command: "systemctl status jenkins",
  what: "Displays the current status of the Jenkins service.",
  when: "To check whether Jenkins is running.",
  example: "sudo systemctl status jenkins"
},

{
  category: "Jenkins",
  command: "journalctl -u jenkins",
  what: "Displays Jenkins service logs.",
  when: "To troubleshoot Jenkins issues.",
  example: "journalctl -u jenkins"
},

{
  category: "Jenkins",
  command: "cat /var/lib/jenkins/secrets/initialAdminPassword",
  what: "Displays the initial Jenkins administrator password.",
  when: "During the first Jenkins setup.",
  example: "sudo cat /var/lib/jenkins/secrets/initialAdminPassword"
},

{
  category: "Jenkins",
  command: "java -jar jenkins-cli.jar -s",
  what: "Connects to Jenkins using the Jenkins CLI.",
  when: "To manage Jenkins from the command line.",
  example: "java -jar jenkins-cli.jar -s http://localhost:8080/"
},

{
  category: "Jenkins",
  command: "java -jar jenkins-cli.jar list-jobs",
  what: "Lists all Jenkins jobs.",
  when: "To view available Jenkins projects.",
  example: "java -jar jenkins-cli.jar -s http://localhost:8080/ list-jobs"
},

{
  category: "Jenkins",
  command: "java -jar jenkins-cli.jar build",
  what: "Triggers a Jenkins job from the command line.",
  when: "To start a build without using the web interface.",
  example: "java -jar jenkins-cli.jar -s http://localhost:8080/ build MyJob"
},

{
  category: "Jenkins",
  command: "java -jar jenkins-cli.jar safe-restart",
  what: "Safely restarts Jenkins after running jobs finish.",
  when: "After installing plugins or updating configuration.",
  example: "java -jar jenkins-cli.jar -s http://localhost:8080/ safe-restart"
},

{
  category: "Jenkins",
  command: "java -jar jenkins-cli.jar help",
  what: "Displays all available Jenkins CLI commands.",
  when: "To learn Jenkins CLI usage.",
  example: "java -jar jenkins-cli.jar -s http://localhost:8080/ help"
},

/* Jenkins Commands End */

{
  category: "Maven",
  command: "mvn --version",
  what: "Displays the installed Maven version.",
  when: "To verify Maven installation.",
  example: "mvn --version"
},

{
  category: "Maven",
  command: "mvn compile",
  what: "Compiles the project's source code.",
  when: "To check whether the project builds successfully.",
  example: "mvn compile"
},

{
  category: "Maven",
  command: "mvn test",
  what: "Runs all unit tests in the project.",
  when: "To verify application functionality.",
  example: "mvn test"
},

{
  category: "Maven",
  command: "mvn package",
  what: "Packages the compiled code into a JAR or WAR file.",
  when: "To prepare the application for deployment.",
  example: "mvn package"
},

{
  category: "Maven",
  command: "mvn install",
  what: "Builds the project and installs it into the local Maven repository.",
  when: "To make the project available for other local projects.",
  example: "mvn install"
},

{
  category: "Maven",
  command: "mvn clean",
  what: "Deletes the target directory and previous build files.",
  when: "Before performing a fresh build.",
  example: "mvn clean"
},

{
  category: "Maven",
  command: "mvn clean install",
  what: "Performs a clean build and installs the project locally.",
  when: "For a complete fresh build.",
  example: "mvn clean install"
},

{
  category: "Maven",
  command: "mvn clean package",
  what: "Performs a clean build and creates the final package.",
  when: "Before deploying an application.",
  example: "mvn clean package"
},

{
  category: "Maven",
  command: "mvn dependency:tree",
  what: "Displays the dependency tree of the project.",
  when: "To inspect project dependencies.",
  example: "mvn dependency:tree"
},

{
  category: "Maven",
  command: "mvn dependency:resolve",
  what: "Downloads and resolves project dependencies.",
  when: "To ensure all required libraries are available.",
  example: "mvn dependency:resolve"
},

{
  category: "Maven",
  command: "mvn site",
  what: "Generates project documentation and reports.",
  when: "To create project documentation.",
  example: "mvn site"
},

{
  category: "Maven",
  command: "mvn help:effective-pom",
  what: "Displays the effective POM after applying inheritance and defaults.",
  when: "To troubleshoot Maven configuration.",
  example: "mvn help:effective-pom"
},

/* Maven Commands End */

{
  category: "Gradle",
  command: "gradle --version",
  what: "Displays the installed Gradle version.",
  when: "To verify Gradle installation.",
  example: "gradle --version"
},

{
  category: "Gradle",
  command: "gradle init",
  what: "Initializes a new Gradle project.",
  when: "To create a new Gradle-based application.",
  example: "gradle init"
},

{
  category: "Gradle",
  command: "gradle build",
  what: "Builds the project and runs tests.",
  when: "To compile and package the application.",
  example: "gradle build"
},

{
  category: "Gradle",
  command: "gradle clean",
  what: "Deletes the build directory.",
  when: "Before performing a fresh build.",
  example: "gradle clean"
},

{
  category: "Gradle",
  command: "gradle test",
  what: "Runs all unit tests.",
  when: "To verify application functionality.",
  example: "gradle test"
},

{
  category: "Gradle",
  command: "gradle assemble",
  what: "Builds project outputs without running tests.",
  when: "To generate application artifacts quickly.",
  example: "gradle assemble"
},

{
  category: "Gradle",
  command: "gradle tasks",
  what: "Displays all available Gradle tasks.",
  when: "To view supported project commands.",
  example: "gradle tasks"
},

{
  category: "Gradle",
  command: "gradle dependencies",
  what: "Displays the project's dependency tree.",
  when: "To inspect dependencies.",
  example: "gradle dependencies"
},

{
  category: "Gradle",
  command: "gradle projects",
  what: "Lists all projects in a multi-project build.",
  when: "To inspect project structure.",
  example: "gradle projects"
},

{
  category: "Gradle",
  command: "gradle wrapper",
  what: "Generates Gradle Wrapper files.",
  when: "To make the project use a specific Gradle version.",
  example: "gradle wrapper"
},

{
  category: "Gradle",
  command: "./gradlew build",
  what: "Builds the project using the Gradle Wrapper.",
  when: "To ensure everyone uses the same Gradle version.",
  example: "./gradlew build"
},

{
  category: "Gradle",
  command: "./gradlew clean build",
  what: "Performs a clean build using the Gradle Wrapper.",
  when: "For a complete fresh build.",
  example: "./gradlew clean build"
},

/* Gradle Commands End */

{
  category: "Helm",
  command: "helm version",
  what: "Displays the installed Helm version.",
  when: "To verify Helm installation.",
  example: "helm version"
},

{
  category: "Helm",
  command: "helm repo add",
  what: "Adds a Helm chart repository.",
  when: "Before installing charts from a repository.",
  example: "helm repo add bitnami https://charts.bitnami.com/bitnami"
},

{
  category: "Helm",
  command: "helm repo update",
  what: "Updates information about chart repositories.",
  when: "To fetch the latest chart versions.",
  example: "helm repo update"
},

{
  category: "Helm",
  command: "helm search repo",
  what: "Searches for charts in configured repositories.",
  when: "To find available Helm charts.",
  example: "helm search repo nginx"
},

{
  category: "Helm",
  command: "helm create",
  what: "Creates a new Helm chart template.",
  when: "To build your own Helm chart.",
  example: "helm create my-chart"
},

{
  category: "Helm",
  command: "helm install",
  what: "Installs a Helm chart into the Kubernetes cluster.",
  when: "To deploy an application.",
  example: "helm install my-app bitnami/nginx"
},

{
  category: "Helm",
  command: "helm list",
  what: "Lists all installed Helm releases.",
  when: "To check deployed applications.",
  example: "helm list"
},

{
  category: "Helm",
  command: "helm status",
  what: "Displays the status of a Helm release.",
  when: "To verify deployment health.",
  example: "helm status my-app"
},

{
  category: "Helm",
  command: "helm upgrade",
  what: "Upgrades an existing Helm release.",
  when: "After modifying a chart or values.",
  example: "helm upgrade my-app bitnami/nginx"
},

{
  category: "Helm",
  command: "helm rollback",
  what: "Rolls back a release to a previous revision.",
  when: "If a deployment update fails.",
  example: "helm rollback my-app 1"
},

{
  category: "Helm",
  command: "helm uninstall",
  what: "Removes a Helm release from the cluster.",
  when: "To delete a deployed application.",
  example: "helm uninstall my-app"
},

{
  category: "Helm",
  command: "helm lint",
  what: "Checks a Helm chart for errors and best practices.",
  when: "Before installing or publishing a chart.",
  example: "helm lint my-chart"
},

/* Helm Commands End */

{
  category: "Prometheus",
  command: "prometheus --version",
  what: "Displays the installed Prometheus version.",
  when: "To verify Prometheus installation.",
  example: "prometheus --version"
},

{
  category: "Prometheus",
  command: "prometheus",
  what: "Starts the Prometheus server.",
  when: "To start monitoring services.",
  example: "prometheus"
},

{
  category: "Prometheus",
  command: "promtool check config",
  what: "Validates the Prometheus configuration file.",
  when: "Before starting or reloading Prometheus.",
  example: "promtool check config prometheus.yml"
},

{
  category: "Prometheus",
  command: "promtool check rules",
  what: "Validates alerting and recording rules.",
  when: "Before applying new rule files.",
  example: "promtool check rules rules.yml"
},

{
  category: "Prometheus",
  command: "systemctl start prometheus",
  what: "Starts the Prometheus service.",
  when: "To launch Prometheus on Linux.",
  example: "sudo systemctl start prometheus"
},

{
  category: "Prometheus",
  command: "systemctl stop prometheus",
  what: "Stops the Prometheus service.",
  when: "To safely stop Prometheus.",
  example: "sudo systemctl stop prometheus"
},

{
  category: "Prometheus",
  command: "systemctl restart prometheus",
  what: "Restarts the Prometheus service.",
  when: "After changing the configuration.",
  example: "sudo systemctl restart prometheus"
},

{
  category: "Prometheus",
  command: "systemctl status prometheus",
  what: "Displays the status of the Prometheus service.",
  when: "To check whether Prometheus is running.",
  example: "sudo systemctl status prometheus"
},

{
  category: "Prometheus",
  command: "journalctl -u prometheus",
  what: "Displays Prometheus service logs.",
  when: "To troubleshoot Prometheus issues.",
  example: "journalctl -u prometheus"
},

{
  category: "Prometheus",
  command: "curl http://localhost:9090/-/healthy",
  what: "Checks whether Prometheus is healthy.",
  when: "To verify the server is running correctly.",
  example: "curl http://localhost:9090/-/healthy"
},

{
  category: "Prometheus",
  command: "curl http://localhost:9090/-/ready",
  what: "Checks whether Prometheus is ready to serve requests.",
  when: "To verify readiness after startup.",
  example: "curl http://localhost:9090/-/ready"
},

{
  category: "Prometheus",
  command: "curl http://localhost:9090/api/v1/targets",
  what: "Displays all configured scrape targets.",
  when: "To verify monitored targets.",
  example: "curl http://localhost:9090/api/v1/targets"
},

/* Prometheus Commands End */

{
  category: "Grafana",
  command: "grafana-server --version",
  what: "Displays the installed Grafana version.",
  when: "To verify Grafana installation.",
  example: "grafana-server --version"
},

{
  category: "Grafana",
  command: "grafana-server",
  what: "Starts the Grafana server manually.",
  when: "To launch Grafana without using a service.",
  example: "grafana-server"
},

{
  category: "Grafana",
  command: "systemctl start grafana-server",
  what: "Starts the Grafana service.",
  when: "To launch Grafana on Linux.",
  example: "sudo systemctl start grafana-server"
},

{
  category: "Grafana",
  command: "systemctl stop grafana-server",
  what: "Stops the Grafana service.",
  when: "To safely stop Grafana.",
  example: "sudo systemctl stop grafana-server"
},

{
  category: "Grafana",
  command: "systemctl restart grafana-server",
  what: "Restarts the Grafana service.",
  when: "After changing Grafana configuration.",
  example: "sudo systemctl restart grafana-server"
},

{
  category: "Grafana",
  command: "systemctl status grafana-server",
  what: "Displays the current status of the Grafana service.",
  when: "To verify Grafana is running.",
  example: "sudo systemctl status grafana-server"
},

{
  category: "Grafana",
  command: "journalctl -u grafana-server",
  what: "Displays Grafana server logs.",
  when: "To troubleshoot Grafana issues.",
  example: "journalctl -u grafana-server"
},

{
  category: "Grafana",
  command: "grafana-cli plugins list-remote",
  what: "Lists all available Grafana plugins.",
  when: "Before installing a plugin.",
  example: "grafana-cli plugins list-remote"
},

{
  category: "Grafana",
  command: "grafana-cli plugins install",
  what: "Installs a Grafana plugin.",
  when: "To add new Grafana functionality.",
  example: "grafana-cli plugins install grafana-piechart-panel"
},

{
  category: "Grafana",
  command: "grafana-cli plugins ls",
  what: "Lists installed Grafana plugins.",
  when: "To verify installed plugins.",
  example: "grafana-cli plugins ls"
},

{
  category: "Grafana",
  command: "grafana-cli admin reset-admin-password",
  what: "Resets the Grafana administrator password.",
  when: "If the admin password is forgotten.",
  example: "grafana-cli admin reset-admin-password newpassword"
},

{
  category: "Grafana",
  command: "curl http://localhost:3000/api/health",
  what: "Checks the health status of the Grafana server.",
  when: "To verify Grafana is responding correctly.",
  example: "curl http://localhost:3000/api/health"
},

/* Grafana Commands End */

];
