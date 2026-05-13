import { TaskModel } from "@/models";
import { defineConfig } from "cypress";
import mongoose from "mongoose";

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      on('task', {
        async resetDatabase() {
          await mongoose.connect('mongodb://127.0.0.1:27017/test');
          await TaskModel.deleteMany();
          return null;
        }
      });
    },
  },
});
