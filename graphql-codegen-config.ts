import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  generates: {
    "./src/graphql-generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // 生成ファイルからの相対パス
        contextType: "./context#Context",
      },
    },
  },
};

export default config;
