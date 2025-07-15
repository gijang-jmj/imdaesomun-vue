<script setup lang="ts">
import IconDate from '@/components/icons/IconDate.vue'
import IconDepartment from '@/components/icons/IconDepartment.vue'
import IconGh from '@/components/icons/IconGh.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconSh from '@/components/icons/IconSh.vue'
import IconView from '@/components/icons/IconView.vue'
</script>

<template>
  <div class="mx-4 my-2 flex items-center gap-2 rounded-xl bg-white p-4 shadow-xs">
    <IconInfo class="w-5 flex-shrink-0 text-teal-500" />
    <span class="text-body text-gray-500">
      최근 10개 공고만 제공되며, 과거 공고 및 검색·정렬 기능은 각 공사의 공식 홈페이지를
      이용해주세요
    </span>
  </div>
  <div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
    <div class="flex flex-col items-stretch gap-2">
      <div class="flex items-center gap-2">
        <IconSh class="w-8" />
        <span class="text-title-bold">서울주택도시공사</span>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-stretch gap-2">
      <div class="flex items-center gap-2">
        <IconGh class="w-8" />
        <span class="text-title-bold">경기주택도시공사</span>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-xs">
          <div class="rounded-xl bg-teal-500-10 px-1.5 py-0.5">
            <span class="text-label-bold text-teal-500">신규</span>
          </div>
          <span class="text-subtitle">2025년 역세권주택 입주자 모집</span>
          <div class="flex flex-wrap gap-x-4">
            <div class="flex items-center gap-1">
              <IconDate class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconView class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
            <div class="flex items-center gap-1">
              <IconDepartment class="w-4 text-gray-500" />
              <span class="text-body text-gray-500">2025.05.01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
