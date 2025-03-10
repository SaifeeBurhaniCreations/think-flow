import { readdir } from "fs/promises";
import { join } from "path";
import { TreeNode } from "../../constants/types.js";

export async function createTree(folderPath: string): Promise<TreeNode[]> {
  if (!folderPath) {
    throw new Error("Folder path is required");
  }

  try {
    const files = await readdir(folderPath, { withFileTypes: true });

    const tree: TreeNode[] = await Promise.all(
      files.map(async (file) => {
        const node: TreeNode = {
          name: file.name,
          type: file.isDirectory() ? "folder" : "file",
        };

        if (file.isDirectory()) {
          const subPath = join(folderPath, file.name);
          node.children = await createTree(subPath);
        }

        return node;
      })
    );

    return tree;
  } catch (error) {
    throw new Error(`Failed to read directory '${folderPath}': ${error instanceof Error ? error.message : String(error)}`);
  }
}