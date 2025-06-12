# MongoZ  

🚀 **A modern, streamlined fork of Mongoku, built for rapid development and an active community!**  

**MongoZ** is a fork of the original [Mongoku](https://github.com/huggingface/Mongoku) project, created by **Hugging Face**. We'd like to extend our heartfelt thanks to the Hugging Face team for their foundational work—without it, this evolution wouldn't be possible. 🎉  

Our mission is to breathe new life into the project with ongoing improvements, faster community support, and dedicated tools for **Compre & Alugue Agora** developers.  

## Why MongoZ?  

✔ **Active maintenance** – While the original Mongoku receives sporadic updates, we prioritize consistent evolution.  
✔ **Dev-first focus** – Enhancements designed for real-world productivity.  
✔ **Simplified integration** – Quick setup and tailored support for your workflow.  
✔ **Community-driven** – Faster issue resolution and open doors for contributions!  

📢 **We invite Hugging Face and all MongoDB enthusiasts to collaborate with us!** Let's shape MongoZ into something even greater together.  

---

✨ *MongoZ: The minimalist web console for MongoDB, by devs, for devs.*  

---

## Quick Links  

🔹 [Installation Guide](#installation)  
🔹 [Roadmap](#roadmap)  
🔹 [How to Contribute](CONTRIBUTING.md)  

---

**Welcome to MongoZ!**  
*(Team Compre & Alugue Agora & Open-Source Community)*  

---

### Architecture

MongoDB client for the web. Query your data directly from your browser. You can host it locally,
or anywhere else, for you and your team.

It scales with your data (at Hugging Face we use it on a 1TB+ cluster) and is blazing fast for all
operations, including sort/skip/limit. Built on TypeScript/Node.js/Angular.

### Demo



### Install & Run

This is the easy and recommended way of installing and running Mongoku.

```
# Install
npm install -g mongoz

# Run from your current terminal
mongoz start
```

You can also run MongoZ as a daemon, using either [PM2](https://github.com/Unitech/pm2) or
[Forever](https://github.com/foreverjs/forever).

```
mongoz start --pm2
# or
mongoz start --forever
```

### Docker

#### Using the Docker HUB image

```
docker run -d --name mongoz -p 3100:3100 comprealugueagora/mongoz

# Run with customized default hosts
docker run -d --name mongoz -p 3100:3100 --env MONGOZ_DEFAULT_HOST="mongodb://user:password@myhost.com:8888" comprealugueagora/mongoz
```

#### Build your own image

If you want to build your own docker image, just clone this repository and run the following:

```
# Build
docker build -t yournamehere/mongoz .

# Run
docker run -d --name mongoz -p 3100:3100 yournamehere/mongoz
```

### Manual Build

If you want to manually build and run mongoz, just clone this repository and run the following:

```bash
# Install the angular cli if you don't have it already
npm install -g typescript @angular/cli
npm install

# Build the front
cd app
npm install
ng build

# And the back
cd ..
tsc

# Run
node dist/server.js
```

### Configuration

You can also specify a few things using environment variables:
```
# Use some customized default hosts (Default = localhost:27017)
MONGOZ_DEFAULT_HOST="mongodb://user:password@localhost:27017;localhost:27017"

# Use another port. (Default = 3100)
MONGOZ_SERVER_PORT=8000

# Use a specific file to store hosts (Default = $HOME/.mongoku.db)
MONGOZ_DATABASE_FILE="/tmp/mongoku.db"

# Timeout before falling back to estimated documents count in ms (Default = 5000)
MONGOZ_COUNT_TIMEOUT=1000

# Read-only mode
MONGOZ_READ_ONLY_MODE=true

# Exclude specific databases from appearing in the UI (comma-separated list)
# Useful to hide internal or system databases like 'admin', 'config', or 'local'
MONGOKU_EXCLUDE_DATABASES="admin,config,local"
```
