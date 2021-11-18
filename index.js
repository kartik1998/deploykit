#!/usr/bin/env node
const fs = require('fs');
const inquirer = require('inquirer');
const { ENV_DIR, DEPLOY_DIR } = process.env;

(function verifyEnv() {
  if (!ENV_DIR) throw new Error('please add a directory path for your envs in ENV_DIR variable');
  if (!DEPLOY_DIR) throw new Error('please add a directory path for your deployment scripts in ENV_DIR variable');
})();

const envFiles = fs.readdirSync(ENV_DIR);
const deployScripts = fs.readdirSync(DEPLOY_DIR);

const envOpts = {
  type: 'list',
  name: 'envFile',
  message: 'select environment',
  choices: [...envFiles, 'Exit'],
};

const deployOpts = {
  type: 'list',
  name: 'deploymentScript',
  message: 'select deployment script',
  choices: [...deployScripts, 'Exit'],
};

(async function resl() {
  const res = await inquirer.prompt(envOpts);
  if (res.envFile === 'Exit') return;
  const env = `${ENV_DIR}/${res['envFile']}`;
  const dep = await inquirer.prompt(deployOpts);
  if (dep.deploymentScript === 'Exit') return;
  const deployScript = `${DEPLOY_DIR}/${dep['deploymentScript']}`;
  console.log({ deployScript });
})();
