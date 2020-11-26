# vite + vue3 + typescript
示例 demo

### 参考文档
* vue3：https://v3.vuejs.org/api/computed-watch-api.html#computed
* vite：https://github.com/vitejs/vite#typescript
* composition-api：https://composition-api.vuejs.org/zh/api.html#setup
* 迁移至 vue3：https://v3.vuejs.org/guide/migration/introduction.html


### Travis CI 自动化部署
* 使用 `docs.travis-ci.com` .com 域名 非 .org （后者太慢)
* `git push` 后自动触发部署
* vite `_assets` 资源目录要改为 `assets` 因为 `GitHub Pages` 404 报错
* 部署地址： https://yuelau.github.io/vue3-typescript-vite-go/#/
