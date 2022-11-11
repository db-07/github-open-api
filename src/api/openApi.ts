import { github } from "@/api/http"

// 获取一个仓库的全部分支
export const listBranches = (data: {owner: string, repo: string}) => {
  return github.get(`/repos/${data.owner}/${data.repo}/branches`)
}

// 获取授权用户的所有issue
export const allIssues = (params?: any) => {
  return github.get(`/issues`, params)
}