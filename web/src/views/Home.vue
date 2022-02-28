<template>
  <div id="home">
    <div class="ads-wrap">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in homeAds" :key="index">
          <a :href="item.url">
            <img
              :src="item.image"
              style="display: block; width: 100%; height: 17rem"
              alt="ads-img"
            />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- end of swiper -->

    <div class="icon-wrap">
      <div class="icon" :class="{ down: !foldIcon }">
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite sprite-one"></i>
            <div class="text">爆料站</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="https://yz.lol.qq.com/zh_CN/" class="icon-link">
            <i class="sprite sprite-two"></i>
            <div class="text">故事站</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite sprite-three"></i>
            <div class="text">周边商城</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite sprite-four"></i>
            <div class="text">体验服</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite sprite-five"></i>
            <div class="text">新人专区</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite sprite-six"></i>
            <div class="text">荣耀-传承</div>
          </a>
        </div>
        <div class="icon-item">
          <a
            href="https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.qt.qtl&from=singlemessage"
            class="icon-link"
          >
            <i class="sprite sprite-seven"></i>
            <div class="text">掌上联盟</div>
          </a>
        </div>
        <div class="icon-item">
          <a
            href="https://game.weixin.qq.com/cgi-bin/h5/static/circlecenter/mixed_circle.html?ssid=1&appid=wx35a4657522d31151&befrom=share&wechat_pkgid=circlecenter_mixed_circle&share_openid=g1Nlbym-JXKFgZSMOZYEd4udhk3E&from_id=3"
            class="icon-link"
          >
            <i class="sprite sprite-eight"></i>
            <div class="text">公众号</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite bg-one"></i>
            <div class="text">版本介绍</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite bg-two"></i>
            <div class="text">对局环境</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite bg-three"></i>
            <div class="text">无限火力</div>
          </a>
        </div>
        <div class="icon-item">
          <a href="#" class="icon-link">
            <i class="sprite bg-four"></i>
            <div class="text">创意互动营</div>
          </a>
        </div>
      </div>
      <div class="fold" @click="foldIcon = !foldIcon">
        <i class="fold-icon" :class="{ down: foldIcon }"></i>
        <span class="fold-txt">{{ foldIcon ? '展开' : '收起' }}</span>
      </div>
    </div>
    <!-- end of icon -->

    <m-card-list title="新闻资讯" icon="icon_news.jpg" :categories="newsCates">
      <template #item="{ category }">
        <div class="news-item" v-for="(item, index) in category.newsList" :key="index">
          <div class="news-cate" :class="calcNewsClass(item.categoryName)">
            {{ item.categoryName }}
          </div>
          <router-link tag="a" :to="`/article/detail/${item._id}`" class="news-title text-ellipsis">
            {{ item.title }}
          </router-link>
          <span class="news-date">{{ item.date | formatDate('MM/DD') }}</span>
        </div>
      </template>
    </m-card-list>
    <!-- end of newsCard -->

    <m-card-list title="英雄列表" icon="icon_hero.jpg" :categories="heroCates">
      <template v-slot:banner>
        <div class="banner">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in newHeroAds" :key="index">
              <router-link tag="a" :to="`/hero/detail/${item.url}`">
                <img :src="item.image" class="news-hero" alt="new_hero" />
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </template>
      <template #item="{ category }">
        <div class="hero">
          <router-link
            tag="div"
            :to="`/hero/detail/${item._id}`"
            class="hero-item"
            v-for="(item, index) in category.heroList"
            :key="index"
          >
            <div class="hero-avatar">
              <img :src="item.avatar" class="avatar" alt="avatar" />
            </div>
            <div class="hero-name">{{ item.name }}</div>
          </router-link>
        </div>
      </template>
    </m-card-list>
    <!-- end of heroCard -->

    <m-card-list title="精彩视频" icon="icon_video.png" :categories="videoCates">
      <template #item="{ category }">
        <div class="video">
          <div
            class="video-item"
            v-for="(item, index) in category.videoList"
            @click="videoPlay(item)"
            :key="index"
          >
            <div class="cover">
              <img v-lazy="item.cover" class="cover-img" alt="cover" />
              <svg viewBox="0 0 40 40" class="news-icon">
                <path
                  d="M24.6 20l-7.1-4.8v9.5l7.1-4.7z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#fff"
                ></path>
                <circle
                  cx="20"
                  cy="20"
                  r="15.8"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></circle>
              </svg>
            </div>
            <div class="info">
              <i class="play-icon"></i>
              <span
                class="play"
                v-html="
                  item.play > 10000
                    ? parseInt(item.play / 10000) +
                      '.' +
                      parseInt((item.play % 10000) / 1000) +
                      '万'
                    : item.play
                "
              ></span>
              <span class="date">{{ item.date | formatDate('YYYY-MM-DD') }}</span>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="subtitle">{{ item.title }}</div>
            <div class="news-line">
              <div class="decorate-line"></div>
            </div>
          </div>
        </div>
      </template>
    </m-card-list>
    <!-- end of videoCard -->

    <router-link tag="div" to="/strategy" class="video-more">加载更多内容</router-link>
  </div>
</template>

<script>
import {
  fetchHomeAds,
  fetchHomeNewHeroAds,
  fetchNewsListOne,
  fetchHeroListOne,
  fetchVideoListOne,
} from '@/api/index'

import CardList from '@/components/CardList'

export default {
  name: 'Home',
  data() {
    return {
      homeAds: [], // 广告数据
      newHeroAds: {}, // 最新英雄广告数据
      foldIcon: false, // 控制图标区域的展开
      newsCates: [], // 新闻数据
      heroCates: [], // 英雄数据
      videoCates: [], // 视频数据
      swiperOptions: {
        // 小圆点
        pagination: {
          el: '.swiper-pagination',
        },
        // 滑动时间
        speed: 500,
        // 自动播放
        autoplay: {
          delay: 3000,
          // 用户手动操作完继续自动播放, false为继续播放
          disableOnInteraction: false,
        },
        // 循环播放
        loop: true,
      },
    }
  },
  mounted() {
    this.fetchHomeAds()
    this.fetchHomeNewHeroAds()
    this.fetchNewsListOne()
    this.fetchHeroListOne()
    this.fetchVideoListOne()
  },
  methods: {
    // 获取轮播广告数据
    async fetchHomeAds() {
      const res = await fetchHomeAds()
      this.homeAds = res.data
    },
    // 获取最新英雄广告数据
    async fetchHomeNewHeroAds() {
      const res = await fetchHomeNewHeroAds()
      this.newHeroAds = res.data
    },

    // 获取新闻数据
    async fetchNewsListOne() {
      const res = await fetchNewsListOne()
      this.newsCates = res.data
    },
    // 获取英雄数据
    async fetchHeroListOne() {
      const res = await fetchHeroListOne()
      this.heroCates = res.data
    },
    // 获取视频数据
    async fetchVideoListOne() {
      const res = await fetchVideoListOne()
      this.videoCates = res.data
    },
    // 跳转到视频播放页
    videoPlay(item) {
      // 保存视频数据到本地
      localStorage.setItem('video', JSON.stringify(item))
      this.$router.push('/videoPlay')
    },
    // 计算新闻分类类名
    calcNewsClass(categoryName) {
      let className = ''
      switch (categoryName) {
        case '公告':
          className = 'news-cate-one'
          break
        case '活动':
          className = 'news-cate-two'
          break
        case '社区':
          className = 'news-cate-three'
          break
        case '赛事':
          className = 'news-cate-four'
          break
        default:
          categoryName = 'news-cate-one'
      }
      return className
    },
  },
  components: {
    'm-card-list': CardList,
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/variable.styl';
@import '../assets/stylus/mixins.styl';

#home {
  .ads-wrap {
    width: 96%;
    overflow: hidden;
    margin: 1rem auto;

    .swiper-container {
      border-radius: 0.5rem;
      overflow: hidden;
    }
  }

  .icon-wrap {
    width: 96%;
    margin: 0 auto;
    margin-top: 1rem;
    padding-top: 1rem;
    background-color: $white;
    border-radius: 0.5rem;
    overflow: hidden;

    .icon {
      flex-align(space-between, flex-start);
      text-align: center;
      overflow: auto;

      &.down {
        flex-wrap: wrap;

        .icon-item:nth-child(4n):after {
          width: 0;
        }
      }
    }

    .icon-item {
      width: 25%;
      margin-bottom: 1rem;
      padding: 0.7rem 0;
      position: relative;
      flex-shrink: 0;

      &:after {
        content: '';
        pos-base(absolute, auto, 0, 1px, 100%, 0, auto);
        background-color: $grey-d4;
        transform: scale(0.8);
      }

      .sprite-one {
        sprite-icon(2.3rem, 2.4rem, -22.4rem, -6.3rem);
      }

      .sprite-two {
        sprite-icon(2.3rem, 2.4rem, -31.8rem, -6.4rem);
      }

      .sprite-three {
        sprite-icon(1.9rem, 2.4rem, -13.1rem, -0.2rem);
      }

      .sprite-four {
        sprite-icon(2rem, 2.4rem, -3.7rem, -6.3rem);
      }

      .sprite-five {
        sprite-icon(2rem, 2.4rem, -31.9rem, -0.2rem);
      }

      .sprite-six {
        sprite-icon(2.4rem, 2.4rem, -12.8rem, -6.2rem);
      }

      .sprite-seven {
        sprite-icon(2.4rem, 2.4rem, -22.2rem, -0.4rem);
      }

      .sprite-eight {
        sprite-icon(2.4rem, 2.4rem, 0, -41.4rem);
      }

      .bg-one {
        bg-img(2.4rem, 2.4rem, '../assets/images/icon/version-icon.png', 2.4rem, 2.4rem);
      }

      .bg-two {
        bg-img(4rem, 2.4rem, '../assets/images/icon/djhj.png', 4rem, 2.4rem);
      }

      .bg-three {
        bg-img(5rem, 2.4rem, '../assets/images/icon/wxwzt.png', 5rem, 1.7rem, 0, 0.5rem);
      }

      .bg-four {
        bg-img(2.4rem, 2.4rem, '../assets/images/icon/cyhdy.png', 2.4rem, 2.4rem);
      }
    }

    .icon-link {
      display: block;
    }

    .fold {
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      background-color: $white-f9;

      .fold-icon {
        sprite-icon(1rem, 1rem, -14.1rem, -23.2rem);
        margin-right: 0.3rem;

        &.down {
          transform: rotateX(180deg);
        }
      }
    }
  }

  .news-item {
    flex-align(flex-start);
    margin-bottom: 1.7rem;

    &:last-child {
      margin-bottom: 0;
    }

    .news-cate {
      font-size: $font-xxs;
      padding: 0 0.3rem;
      margin-right: 1rem;
      margin-left: 0.15rem;

      &.news-cate-one {
        border-all($green);
        color: $green;
      }

      &.news-cate-two {
        border-all($orange-f0);
        color: $orange-f0;
      }

      &.news-cate-three {
        border-all($red);
        color: $red;
      }

      &.news-cate-four {
        border-all($blue-4d);
        color: $blue-4d;
      }
    }

    .news-title {
      flex: 1;
      font-size: $font-md;
      color: $dark-22;

      &:visited {
        color: $grey-99;
      }
    }

    .news-date {
      margin-left: 1rem;
      font-size: $font-s;
      color: $grey-77;
    }
  }

  .banner {
    margin-top: 1.5rem;

    .swiper-container {
      border-radius: 0.4rem;
    }

    .news-hero {
      display: block;
      width: 100%;
      height: 13rem;
    }
  }

  .hero {
    flex-align(flex-start, flex-start, wrap);
    margin: 0 -0.7rem;

    .hero-item {
      width: 20%;
      text-align: center;
      padding: 0.7rem;
      padding-bottom: 0;
      box-sizing: border-box;
    }

    .hero-avatar {
      position: relative;
      width: 100%;
      padding-bottom: 100%;

      .avatar {
        border-radius: 0.75rem;
        pos-base();
      }
    }

    .hero-name {
      margin-top: 0.5rem;
      margin-bottom: 0.2rem;
      height: 2rem;
      line-height: 2rem;
      font-size: $font-s;
      color: $dark-22;
    }
  }

  .video {
    flex-align(flex-start, flex-start, wrap);
    margin: 0 -0.4rem;

    .video-item {
      width: 100%;
      padding: 0.5rem;
      padding-bottom: 0;
      margin-bottom: 1.3rem;
      box-sizing: border-box;

      .cover {
        position: relative;
        width: 100%;
        height: 18.5rem;
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%);

        .cover-img {
          display: block;
          pos-base();
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s;

          &:after {
            opacity: 0.4;
          }
        }

        .news-icon {
          position: absolute;
          top: 0.8rem;
          left: 0.8rem;
          z-index: 3;
          width: 2.7rem;
          height: 2.7rem;
        }
      }

      .title {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        color: $dark-22;
        height: 4.3rem;
        line-height: 1.7em;
        font-size: $font-md;
        text-ellipsis(2);
        font-weight: bold;
      }

      .subtitle {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        color: $dark-34;
        font-size: $font-s;
        text-ellipsis(2);
      }

      .info {
        margin-top: 0.5rem;
        font-size: $font-xs;
        color: $dark-22;

        .play-icon {
          sprite-icon(1.2rem, 0.9rem, -11.7rem, -23.4rem);
          margin: 0 0.5rem;
        }

        .date {
          float: right;
        }
      }
    }

    .news-line {
      position: relative;
      width: 100%;
      height: 0.3rem;
      margin-top: 2rem;
      background: #dbdbdb;

      .decorate-line {
        left: 0;
        top: 0.1rem;
        position: absolute;
        width: 6.5rem;
        height: 0.4rem;
        background-color: #dbdbdb;

        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 100%;
          width: 0.4rem;
          height: 0.4rem;
          border-right: 0.4rem solid transparent;
          border-top: 0.4rem solid #dbdbdb;
        }
      }
    }
  }

  .video-more {
    position: relative;
    z-index: 9999;
    text-align: center;
    background-color: $white;
    margin-top: -0.2rem;
    height: 3.5rem;
    line-height: 3.5rem;
    color: $grey-7a;
  }
}
</style>
