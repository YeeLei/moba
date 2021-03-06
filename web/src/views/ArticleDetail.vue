<template>
  <div id="article-detail">
    <div class="header">
      <div class="back" @click="$router.go(-1)">
        <img src="../assets/images/backBg.png" class="back-icon" alt="back-icon" />
      </div>
      <div class="title text-ellipsis">{{ articleDetail.title }}</div>
      <div class="date">{{ articleDetail.date | formatDate('YYYY-MM-DD') }}</div>
    </div>
    <!-- end of header -->
    <div class="detail-data">
      <div class="data-name">作者: {{ articleDetail.author }}</div>
      <div class="data-view">{{ articleDetail.hits }}次阅读</div>
    </div>
    <div class="detail-line"><div class="line-inner"></div></div>
    <div class="body">
      <div class="content" v-html="articleDetail.body"></div>
    </div>
    <!-- end of body -->

    <div
      class="related"
      v-if="articleDetail.related[0] !== null && articleDetail.related[1] !== null"
    >
      <div class="related-header">
        <img src="../assets/images/related.png" alt="related" />
        <div class="title">相关资讯</div>
      </div>
      <div class="related-body">
        <router-link
          class="link"
          tag="div"
          v-for="(item, index) in articleDetail.related"
          :key="index"
          :to="`/article/detail/${item._id}`"
        >
          <div class="title text-ellipsis">{{ item.title }}</div>
          <div class="date">{{ item.date | formatDate('YYYY-MM-DD') }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchArticle } from '@/api/index'
export default {
  name: 'ArticleDetail',
  props: ['id'],
  data() {
    return {
      articleDetail: {
        related: [],
      },
    }
  },
  watch: {
    // 点击关联文章时获取文章信息
    id() {
      this.fetchArticle()
    },
  },
  mounted() {
    this.fetchArticle()
  },
  methods: {
    // 获取文章详情
    async fetchArticle() {
      const res = await fetchArticle({ id: this.id })
      this.articleDetail = Object.assign({}, this.articleDetail, res.data)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/variable.styl';
@import '../assets/stylus/mixins.styl';

#article-detail {
  .header {
    flex-align(flex-start);
    height: 3.7rem;
    border-bottom($grey-99);

    .back-icon {
      display: block;
      width: 1rem;
      margin-left: 0.7rem;
    }

    .title {
      margin-left: 1rem;
      flex: 1;
      font-size: $font-sm;
      font-weight: 700;
      color: $blue-43;
    }

    .date {
      margin-right: 0.7rem;
      margin-left: 1rem;
      font-size: $font-xxs;
      color: $grey-9f;
    }
  }

  .detail-data {
    flex-align(flex-start);
    padding: 0 3rem;
    height: 30px;
    line-height: 30px;
    font-size: $font-sm;
    color: #9e9c8e;

    .data-name {
      flex: 1;
    }
  }

  .detail-line {
    position: relative;
    margin: 0 auto 2rem;
    width: 90%;

    &:before {
      content: '';
      position: absolute;
      top: 0.4rem;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: #ffd071;
    }

    .line-inner {
      position: absolute;
      width: 10rem;
      height: 0.4rem;
      background-color: #ffd071;
      position: absolute;
      top: 0.2rem;
      left: 0;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 0.2rem;
        height: 0.2rem;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #ffd071;
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0.7rem;
      left: 0;
      width: 90%;
      height: 0.2rem;
      background-color: #ffd071;
    }
  }

  .body {
    font-size: $font-m;
    padding: 0 1.8rem;
    margin-bottom: 1.8rem;

    >>> iframe {
      width: 100%;
    }

    >>> p {
      line-height: 1.5em;
      color: $dark-33;

      img {
        width: 100%;
      }
    }

    >>> .ql-align-center {
      text-align: center;
    }
  }

  .related {
    padding: 3rem 1.8rem 5rem;

    .related-header {
      flex-align(flex-start);
      height: 3.7rem;

      .title {
        margin-left: 0.7rem;
        font-size: $font-md;
        font-weight: 700;
        color: $blue-43;
      }
    }

    .related-body {
      .link {
        flex-align();
        margin-top: 1.2rem;

        .title {
          flex: 1;
          font-size: $font-md;
        }

        .date {
          margin-right: 0.7rem;
          margin-left: 1rem;
          font-size: $font-sm;
          color: $grey-9f;
        }
      }
    }
  }
}
</style>
