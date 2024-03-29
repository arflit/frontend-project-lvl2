#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import compareJsons from '../src/compareJsons.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action(compareJsons);

program.parse();
