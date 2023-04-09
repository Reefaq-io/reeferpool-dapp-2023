<!-- eslint-disable vue/max-len -->
<!-- eslint-disable vue/no-bare-strings-in-template -->
<template>

  <div
    v-if="actualMonth || nextMonthUserPrediction"
    :class="b()"
  >
    <div :class="b('inner')">
      <div
        class="card bg-granit-lighter block md:grid md:grid-cols-2 xl:grid-cols-3 shadow-xl shadow-black/5 transition ease-out duration-300 hover:shadow-2xl rounded-2xl p-6"
      >
        <div class="relative flex flex-col">
          <div v-if="!nextMonthUserPrediction" class="card-body grow p-4 md:p-6">
            <div class="mb-4">
              <h3 class="card-title text-2xl block pb-2 font-semibold">
                {{ predictionMonthName }} {{ thisYear }}
              </h3>
              <h1 class="card-title inline text-4.5xl">
                Make your Reef prediction now
              </h1>
              <p class="mt-4">
                Predict Reef price for the
                <span class="font-semibold">end of {{ predictionMonthName }}</span>. You can only submit one prediction per month. Predict as accurately as
                possible to win.
              </p>
            </div>
  
            <div class="card-content">
              <div v-if="!isUserPredictionSearch">
                <form novalidate @submit.prevent="submit">
                  <div class="flex flex-col gap-6">
                    <div class="mt-4 grid grid-cols-2 gap-4">
                      <div class="col-span-2">
                        <label for="user_name" class="text-granit-strong text-sm mb-10">
                          <!-- Your -->
                          <a
                            href="https://www.swipetips.com/how-to-add-a-username-in-telegram/"
                            class="underline underline-offset-2 decoration-dashed"
                          >Telegram ID</a>
                          <span class="text-primary">*</span>
                        </label>
  
                        <input
                          v-model="userName"
                          id="user_name"
                          type="text"
                          placeholder="@"
                          required
                          class="form-control pb-2 pt-2.5 rounded-xl bg-granit-soft border-gray-300/70 focus:shadow-xl focus:outline-0 focus:ring-0"
                          autofocus
                        >
                      </div>
                      <div>
                        <label
                          for="prediction_day_price"
                          class="text-granit-strong text-sm mb-10"
                        >
                          Live Reef Price ($)
                        </label>
                        <input
                          v-model="liveReefPrice"
                          id="prediction_day_price"
                          type="number"
                          disabled
                          class="form-control muted pb-2 pt-2.5 rounded-xl bg-granit-soft border-gray-300/70 text-muted cursor-not-allowed"
                        >
                      </div>
                      <div>
                        <label
                          for="prediction_future_price"
                          class="text-granit-strong text-sm mb-10"
                        >
                          Your Prediction<span class="text-primary">*</span>
                        </label>
                        <input
                          v-model="predictionFuturePrice"
                          id="prediction_future_price"
                          type="number"
                          required
                          class="form-control pb-2 pt-2.5 rounded-xl bg-granit-soft border-gray-300/70 focus:shadow-xl focus:outline-0 focus:ring-0"
                          autofocus
                          step="0.000001"
                        >
                      </div>
                      <div class="col-span-2">
                        <label
                          for="user_comment"
                          class="text-granit-strong text-sm mb-10"
                        >
                          Justify your prediction
                          <span class="text-primary">*</span>
                        </label>
                        <div class="relative">
                          <textarea
                            v-model="userComment"
                            id="user_comment"
                            type="textarea"
                            maxlength="100"
                            required
                            class="form-control pb-2 pt-2.5 rounded-xl bg-granit-soft border-gray-300/70 focus:shadow-xl focus:outline-0 focus:ring-0"
                            autofocus
                          >
                                                              </textarea>
                          <small
                            v-if="userComment"
                            class="text-xs text-muted absolute top-0 right-0 p-2 pointer-events-none"
                          >
                            {{ userComment.length }} / 100
                          </small>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary" type="submit">
                      Submit {{ predictionMonthName }} Prediction
                    </button>
                  </div>
                </form>
              </div>
              <div class="flex flex-col mt-3">
                <button
                  v-if="!isUserPredictionSearch"
                  type="button"
                  class="btn btn-secondary"
                  @click="isUserPredictionSearch = !isUserPredictionSearch"
                >
                  Find {{ predictionMonthName }} Prediction
                </button>
  
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary"
                  @click="isUserPredictionSearch = !isUserPredictionSearch"
                >
                  Make A {{ predictionMonthName }} Prediction
                </button>
  
                <!-- <div v-if="isUserPredictionSearch">
                  <form novalidate @submit.prevent="findPrediction">
                    <div class="flex flex-col gap-6">
                      <div class="mt-4 grid grid-cols-2 gap-4">
                        <div class="col-span-2">
                          <label
                            for="user_name"
                            class="text-granit-strong text-sm mb-10"
                          >
                            Your
                            <a
                              href="https://www.swipetips.com/how-to-add-a-username-in-telegram/"
                              target="_blank"
                              class="underline underline-offset-2 decoration-dashed"
                            >Telegram ID</a>
                            <span class="text-primary">*</span>
                          </label>
  
                          <input
                            v-model="user_name"
                            id="user_name"
                            type="text"
                            placeholder="@"
                            required
                            class="form-control pb-2 pt-2.5 rounded-xl bg-granit-soft border-gray-300/70 focus:shadow-xl focus:outline-0 focus:ring-0"
                            :class="{'border-2 border-red-400': error,}"
                            autofocus
                          >
  
                          <span
                            v-if="error"
                            class="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1"
                          >
                            No User Prediction found.
                          </span>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="submit">
                        Search
                      </button>
                    </div>
                  </form>
                </div> -->
              </div>
            </div>
          </div>
          <div
            v-if="nextMonthUserPrediction"
            class="card-body relative block md:flex md:flex-col md:grow pb-10 pt-2 md:p-6 justify-between"
          >
            <div>
              <div v-if="nextMonthUserPrediction && currentMonthUserPrediction">
                <h3 class="card-title text-2xl block pb-2 font-semibold">
                  This Month & Next Month
                </h3>
                <h1 class="card-title inline text-5xl">
                  Your Price Predictions
                </h1>
                <p class="mt-2 leading-tight">
                  All details about your price prediction for
                  <span class="font-semibold">end of {{ currentMonthName }}</span> &
                  <span class="font-semibold">end of {{ predictionMonthName }}</span>.
                </p>
              </div>
              <div v-else>
                <h1 class="card-title inline text-5xl">
                  Your Price Prediction
                </h1>
                <h3 class="card-title block font-semibold">
                  {{ predictionMonthName }} {{ thisYear }}
                </h3>
  
                <p class="mt-2 leading-tight">
                  All details about your price prediction for
                  <span class="font-semibold">end of {{ predictionMonthName }}</span>.
                </p>
              </div>
            </div>
            <div class="card-content block md:flex md:lex-col md:grow justify-end mt-10 md:mt-5">
              <div class="flex grow flex-col gap-4" :class="{'justify-end' : currentMonthUserPrediction && nextMonthUserPrediction}">
                <div v-if="currentMonthUserPrediction">
                  <div class="rounded-xl p-2 relative nm-inset-granit-dark-sm">
                    <div
                      class="px-4 py-1 card-head bg-gradient-to-r from-primary to-secondary w-full relative rounded-t-xl flex items-center"
                    >
                      <h4 class="card-title pt-1 text-on-primary font-medium text-sm">
                        {{ currentMonthName }} {{ thisYear }}
                      </h4>
                    </div>
                    <div class="md:grid md:grid-cols-2 flex flex-col gap-2">
                      <div
                        class="flex bg-granit-lighter rounded-b-lg text-center justify-between px-4 pb-3 pt-5 flex-col items-center col-span-2"
                      >
                        <div class="flex gap-4 items-center">
                          <h1 class="text-4xl">
                            ${{
                              currentMonthUserPrediction.predictionFuturePrice
                            }}
                          </h1>
                          <div
                            class="h-3 w-3 mb-2 group rounded-full bg-white border-2 border-reef-blue-100 flex flex-col items-center hover:cursor-pointer shadow-[0_0px_0px_7px_rgba(62,149,223,.4)] hover:shadow-[0_0px_0px_7px_rgba(169,49,133,.4)] hover:border-primary"
                          ></div>
                        </div>
                      </div>
  
                      <div
                        class="bg-granit-lighter rounded-lg leading-none p-4 text-center col-span-2"
                      >
                        <small class="block">
                          <span
                            class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                          >You:</span>
                          « {{ currentMonthUserPrediction.userComment }} »
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <small class="pt-1 card-title font-medium text-muted">
                    {{ predictionMonthName }}
                  </small>
                  <div class="rounded-xl p-2 relative nm-inset-granit-dark-sm">
                    <div class="md:grid md:grid-cols-2 flex flex-col gap-2">
                      <div
                        class="flex bg-granit-lighter rounded-lg text-center justify-between px-4 pb-3 pt-5 rounded-t-lg flex-col items-center col-span-2"
                      >
                        <div class="flex gap-1">
                          <h1 class="text-4xl">
                            ${{ nextMonthUserPrediction.predictionFuturePrice }}
                          </h1>
                        </div>
                      </div>
  
                      <div
                        class="bg-granit-lighter rounded-lg leading-none p-4 text-center col-span-2"
                      >
                        <small class="block">
                          <span
                            class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                          >You:</span>
                          « {{ nextMonthUserPrediction.userComment }} »
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      <!-- <PredictionMonthCard
            v-if="actualMonth && actualMonth.allPredictions.length > 0"
            :month-prediction="actualMonth"
            :prediction-year="thisYear"
            :month-name="currentMonthName"
            :live-reef-price="liveReefPrice"
            :prediction-amount="actualMonth.predictionAmount"
            :all-predictions="actualMonth.allPredictions"
            :user-prediction="currentMonthUserPrediction"
          />
  
          <div v-else class="flex flex-col xl:col-span-2">
            <div class="grow p-4 md:p-6 flex flex-col relative">
              <div class="flex flex-col">
                <h3 class="card-title font-semibold">
                  {{ currentMonthName }} {{ thisYear }}
                </h3>
                <p class="mt-2 leading-tight">
                  Last month no user has made a prediction for
                  <span class="font-semibold">{{ currentMonthName }}</span>. A prediction is always made one month in advance for the current month. Make
                  your Reef price prediction
                  <span class="font-semibold">for the next month</span>.
                </p>
              </div>
  
              <div
                class="flex grow items-center justify-center border rounded-xl px-4 py-10 bg-granit-soft/30 mt-5"
              >
                <div class="grow text-center py-10 px-4 md:px-2 md:py-0">
                  <div class="mb-8 flex flex-col">
                    <fa-icon :icon="['fas', 'octagon-xmark']" size="3x" class="text-gray-200" />
  
                    <div class="my-4">
                      <h2
                        class="text-4xl text-transparent bg-clip-text mx-auto md:w-1/2 bg-gradient-to-r from-primary to-secondary"
                      >
                        No Predictions for {{ currentMonthName }} {{ thisYear }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="bg-granit-lighter p-4 rounded-2xl w-full flex flex-col xl:col-span-2">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 w-2/3 bg-slate-700/20 rounded"></div>
            <div class="h-8 w-2/3 bg-slate-700/20 rounded"></div>
            <div class="space-y-2">
              <div class="h-2 bg-slate-700/20 rounded"></div>
              <div class="h-2 bg-slate-700/20 rounded"></div>
              <div class="h-2 bg-slate-700/20 rounded"></div>
            </div>
            <div class="space-y-20">
              <div class="h-80 bg-slate-700/20 rounded"></div>
            </div>
            <div class="space-y-20">
              <div class="h-20 bg-slate-700/20 rounded"></div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div v-if="historicMonths" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-10 mt-12">
                      <HistoricMonthCard
                          v-for="(month, index) in historicMonths"
                          :avgPredictionPrice="month.avgPredictionPrice"
                          :closePrice="month.closePrice"
                          :openTime="month.openTime"
                          :closeTime="month.closeTime"
                          :winner="month.winner"
                          :predictionAmount="month.predictionAmount"
                      />
                  </div>
                  <div v-else class="flex items-center justify-center mt-20">
                      <ui-spinner />
                  </div> -->
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import createPrediction from '@/styleguide/mock-data/data-object/prediction';
  import { IPrediction } from '@/types/prediction';
  
  interface ISetup {
    actualMonth: {
      allPredictions: IPrediction[];
      avgPredictionPrice: number | null;
      date: string;
      maxPredictionPrice: number | null;
      minPredictionPrice: number | null;
      predictionAmount: number;
    };
    // historicMonths: IPrediction[];
  }
  
  interface IData {
    nextMonthUserPrediction: IPrediction | null;
    currentMonthUserPrediction: IPrediction | null;
    // error: string | null;
    userName: string | null;
    userComment: string;
    predictionFuturePrice: number | null;
    liveReefPrice: number | null;
    // historicMonths: IPrediction[] | null;
    thisYear: number | null;
    isUserPredictionSearch: boolean | null;
  }
  
  export default defineComponent({
    name: 'c-price-prediction',
  
    setup(): ISetup {
      return {
        actualMonth: {
          allPredictions: [
            createPrediction(),
            createPrediction(),
            createPrediction(),
            createPrediction(),
            createPrediction(),
            createPrediction(),
            createPrediction(),
          ],
          avgPredictionPrice: null,
          date: '2023-04-01',
          maxPredictionPrice: null,
          minPredictionPrice: null,
          predictionAmount: 0,
        },
        // historicMonths: [
        //   createPrediction(),
        //   createPrediction(),
        //   createPrediction(),
        //   createPrediction(),
        //   createPrediction(),
        //   createPrediction(),
        //   createPrediction(),
        // ],
  
      };
    },
    // components: {},
  
    data(): IData {
      const nextMonthUserPrediction = null;
      const currentMonthUserPrediction = null;
      // const error = null;
      const userName = null;
      const userComment = '';
      const predictionFuturePrice = null;
      const liveReefPrice = null;
      // const historicMonths = null;
      const thisYear = null;
      const isUserPredictionSearch = null;
  
      return {
        nextMonthUserPrediction,
        currentMonthUserPrediction,
        // error,
        userName,
        userComment,
        predictionFuturePrice,
        liveReefPrice,
        // historicMonths,
        thisYear,
        isUserPredictionSearch,
      };
    },

    computed: {
      predictionMonthName(): string {
        const now = new Date();
  
        const month = new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleString('en-US', { month: 'long' });
  
        return month.toString() || '';
      },
  
      currentMonthName(): string {
        const now = new Date();
  
        const month = new Date(now.getFullYear(), now.getMonth(), 1).toLocaleString('en-US', { month: 'long' });
  
        return month.toString() || '';
      },
    },
    
    methods: {
      submit() {
        console.log('submit');
      },
    },
  });
  </script>
  
  <style lang="scss">
    @use '@/setup/scss/mixins';
    @use '@/setup/scss/variables';
  
    .c-price-prediction {

      $border-radius: 20px;

      @include mixins.container;

      border-radius: $border-radius;
      background: variables.$color-reef-grayscale--light;

      &__inner {
        padding: variables.$spacing--40;
      }
    }
  </style>
  
