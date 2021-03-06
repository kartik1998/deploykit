## deploykit ![](https://img.shields.io/badge/deploy-deploykit-blue)

<blockquote>
The script needs two variables from the env "ENV_DIR" & "DEPLOY_DIR"
I would recommend that you add something like: <br/>
export ENV_DIR=/path/to/directory-with-env-files <br/>
export DEPLOY_DIR=/path/to/directory-with-deploy-scripts <br/>
Also ensure that these directories <b>only have files</b>
</blockquote>

### Installation

`npm i -g @kartikkhk/deploykit`

### Usage

- Just install deploykit and run `deploy`
- Sample env file to be placed in `ENV_DIR`:

```
JENKINS_TOKEN=randomtoken
ENV=staging
```

### Example Screenshots

![example1](./assets/example1.png) <br/>
![example2](./assets/example2.png)

- **LICENSE**: [WTFPL](http://www.wtfpl.net/)
