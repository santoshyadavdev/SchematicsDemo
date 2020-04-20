import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngAdd(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.addTask(new NodePackageInstallTask());

    //add a new file
    tree.create('index.ts', `console.log('Schematics is amazing')`);

    //read a file
    const fileData = tree.read('index.ts') || '';
    _context.logger.info(fileData?.toString());

    //overwrite a file
    tree.overwrite('index.ts', `console.log('schematics is great')`);

    //delete a file 
    tree.delete('index.ts');

    return tree;
  };
}
