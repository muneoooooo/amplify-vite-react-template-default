import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});


backend.addOutput({
  storage: {
    aws_region: "ap-northeast-1",
    bucket_name: "test-storage-browser-20241224",
    buckets: [
      {
        name: "myBucket",
        bucket_name: "test-storage-browser-2024122",
        aws_region: "ap-northeast-1",
        paths: {
          "public/*": {
            "authenticated": [
              "get",
              "list",
              "write",
              "delete"
            ]
          }
        }
      }
    ]
  },
});