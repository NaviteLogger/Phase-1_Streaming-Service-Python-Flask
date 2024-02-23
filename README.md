# Local Streaming Service platform written in Python's web framework - Flask

## Table of Contents

- [Local Streaming Service platform written in Python's web framework - Flask](#local-streaming-service-platform-written-in-pythons-web-framework---flask)
    - [Introduction](#introduction)
    - [Features](#features)
    - [Future Features](#future-features)
    - [Installation](#installation)
        - [Prerequisites](#prerequisites)
        - [Setup Instructions (for Linux operating system)](#setup-instructions-for-linux-operating-system)
    - [Usage](#usage)
    - [Documentation](#documentation)
    - [Contributing](#contributing)
    - [Authors](#authors)
    - [License](#license)

## Introduction

This is a simple web streaming service platform written in Python's web framemork - Flask. The platform is designed to allow users to request, watch and bookmark movies and TV shows available on the platform's server. The project was created to serve as a local streaming service platform for a small community or organization. The platform is designed to be simple and easy to use, with a modern, responsive user interface.

This project integrates a React frontend with a Flask backend to create a full-stack web application. The React app serves as the user interface, allowing users to interact with the application through a modern, responsive design. The Flask backend handles API requests, business logic, and interactions with the database, providing a robust server-side platform.

## Features

- Modern React frontend
- Flask backend with RESTful API
- Responsive design suitable for all devices

## Future Features

- User authentication and authorization
- User's ability to upload and manage their own movies
- P2P streaming

## Installation

### Prerequisites

- NVM (https://medium.com/@imvinojanv/how-to-install-node-js-and-npm-using-node-version-manager-nvm-143165b16ce1)
- Node.js and npm (https://nodejs.org/)
- Python 3 (https://www.python.org/downloads/)
- Flask (https://palletsprojects.com/p/flask/)
- Dependencies (see requirements.txt)

### Setup Instructions (for Linux operating system)

1. Clone the repository

```bash
git clone https://github.com/NaviteLogger/Local-Web-Streaming-Service-Python-Flask.git
```

1.2. Create a virtual environment (optional)

```bash
python3 -m venv venv
``` 

1.3. Activate the virtual environment (optional)

```bash
source venv/bin/activate
```

2. Install the dependencies

```bash
pip install -r requirements.txt
```

3. Install the frontend dependencies (Next.js development server)

```bash
cd my-app
npm install
```

### Usage

4. Run the backend server

```bash
flask run
```

5. Run the frontend development server

```bash
cd my-app
npm run dev
```

6. Open the application in your web browser

```bash
http://localhost:3000
```

## Documentation

The documentation for this project can be found in the [docs](docs) directory.

## Contributing

Contributions are welcome! Please see the [contributing guidelines](CONTRIBUTING.md) for more information.

## Authors

- [NaviteLogger](https://www.linkedin.com/in/marek-kacprzak-238053218/)

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
