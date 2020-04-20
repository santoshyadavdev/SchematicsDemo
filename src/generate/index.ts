import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { Rule, apply, url, applyTemplates, chain, branchAndMerge, mergeWith, SchematicContext } from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";


export function generate(_options: any): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const template = apply(url('./files'), [
            applyTemplates({
                ...strings, 
                ..._options 
            })
        ])

        return chain([
            branchAndMerge(mergeWith(template))
        ])(tree, context);
    }
}