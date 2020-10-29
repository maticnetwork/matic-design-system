<template>
  <div :class="classes">
    <div class="upper-section">
      <div :class="progressLineLeftClasses"></div>
      <div :class="iconCompletedClasses">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#003CB2" />
          <path d="M7 12L10 15L17 8" stroke="white" stroke-width="2" />
        </svg>
      </div>
      <div :class="iconProgressClasses">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="white"
            stroke="#003CB2"
            stroke-width="2"
          />
        </svg>
      </div>
      <div :class="iconIncompleteClasses">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="white"
            stroke="#DCDFE6"
            stroke-width="2"
          />
        </svg>
      </div>
      <div :class="progressLineRightClasses"></div>
    </div>
    <div class="lower-section">
      <div :class="descriptionClasses">
        {{ description }}
        <a
          v-if="href && status == 'completed'"
          :href="href"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 1C8.75 0.585786 8.41421 0.25 8 0.25H1.25C0.835786 0.25 0.5 0.585786 0.5 1C0.5 1.41421 0.835786 1.75 1.25 1.75H7.25V7.75C7.25 8.16421 7.58579 8.5 8 8.5C8.41421 8.5 8.75 8.16421 8.75 7.75V1ZM1.53033 8.53033L8.53033 1.53033L7.46967 0.46967L0.46967 7.46967L1.53033 8.53033Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import "./progress.scss";

export default {
  name: "Progress",

  components: {},

  props: {
    left: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      default: "incomplete",
      validator: function (value) {
        return ["completed", "progress", "incomplete"].indexOf(value) !== -1;
      },
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
    href: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        "m-progress": true,
        "half-width": !this.screenLeft || !this.right,
      };
    },
    progressLineLeftClasses() {
      return {
        "progress-line": true,
        "progress-line-left": true,
        hide: !this.left,
        completed: this.status == "completed",
        progress: this.status == "progress",
      };
    },
    progressLineRightClasses() {
      return {
        "progress-line": true,
        "progress-line-right": true,
        hide: !this.right,
        completed: this.status == "completed",
      };
    },
    iconCompletedClasses() {
      return {
        "progress-icon": true,
        active: this.status == "completed",
      };
    },
    iconProgressClasses() {
      return {
        "progress-icon": true,
        active: this.status == "progress",
      };
    },
    iconIncompleteClasses() {
      return {
        "progress-icon": true,
        active: this.status == "incomplete",
      };
    },
    descriptionClasses() {
      return {
        "m-description": true,
        "m-align-left": !this.left,
        "m-align-right": !this.right,
        incomplete: this.status == "incomplete",
      };
    },
  },

  methods: {
    showLinkIcon() {
      console.log("something");
      //   return false;
      //   return this.href && this.status == "completed";
    },
  },
};
</script>