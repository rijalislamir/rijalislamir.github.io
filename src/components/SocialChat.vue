<template>
  <div class="text-white mt-36 overflow-hidden mx-8 mb-8">
    <div class="pb-8">
      <table class="w-full">
        <tbody>
          <tr>
            <td class="font-bold py-2">DEMO</td>
            <td class="py-2 flex">
              <a href="https://social-chat.rijalislami.my.id/" target="_blank">
                <p class="group transition cursor-pointer">
                  &nearr; Open
                  <span
                    class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                  ></span>
                </p>
              </a>
            </td>
          </tr>
          <tr>
            <td class="font-bold py-2">YEAR</td>
            <td class="py-2">2023</td>
          </tr>
          <tr>
            <td class="font-bold py-2 align-top">STACKS</td>
            <td class="py-2">
              <div class="flex flex-col">
                <span>Express</span>
                <span>Socket.io</span>
                <span>Tailwind</span>
                <span>Vue 3</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="pb-8">
      Social Chat is an application that mimic WhatsApp. The purpose of this
      project is to learn web socket, on this case I used Socket.io framework.
    </p>

    <p class="pb-8">
      There are some features implemented on the app, such as group chat, set
      profil picture, delete account, etc.
    </p>

    <p class="pb-8">
      You can find online users and start the conversation with them.
    </p>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Login</h1>
      <img :src="SocialChatLogin" alt="social-chat-login" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Register</h1>
      <img :src="SocialChatRegister" alt="social-chat-register" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Home</h1>
      <img :src="SocialChatHome" alt="social-chat-home" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Conversation</h1>
      <img :src="SocialChatConversation" alt="social-chat-conversation" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Profile</h1>
      <img :src="SocialChatProfile" alt="social-chat-profile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialChatLogin from "../assets/social-chat-login.png";
import SocialChatRegister from "../assets/social-chat-register.png";
import SocialChatHome from "../assets/social-chat-home.png";
import SocialChatConversation from "../assets/social-chat-conversation.png";
import SocialChatProfile from "../assets/social-chat-profile.png";
</script>
