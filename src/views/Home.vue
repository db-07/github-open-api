<template>
  <div>
    Home
  </div>
</template>

<script lang="ts" setup>
import { listBranches, allIssues } from '@/api/openApi';
import { OWNER } from '@/config';
import { github } from '@/utils';
import { Octokit } from 'octokit';
import { onMounted } from 'vue';
// console.log(github, 'github');



const ListBranches = async () => {
  let res = await listBranches({
    owner: OWNER,
    repo: 'github-open-api'
  })
  console.log(res, 'res');
  
//   let res = await new Octokit({ auth: `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` }).rest.repos.getBranch({
//     owner: 'db-07',
//     repo: 'github-open-api',
//     branch: 'main'
//   })
//   console.log(res, 'branch');
  
}

const getIssueList = async () => {
//   let res = await github.request('GET /issues{?filter,state,labels,sort,direction,since,collab,orgs,owned,pulls,per_page,page}', {})
//   console.log(res, 'res');
  let res = await allIssues({
    filter: 'all'
  })
  console.log(res, 'issues');
  
}

onMounted(async () => {
  await ListBranches()
  await getIssueList()
})
</script> 

<style lang="scss" scoped>

</style>
