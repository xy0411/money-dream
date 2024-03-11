<script setup lang="ts">
import { h, ref, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { AimOutlined } from '@vicons/antd'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

let collapsed = ref(false)

const menuOptions: MenuOption[] = [
    {
        whateverLabel: '且听风吟',
        whateverKey: 'hear-the-wind-sing',
        icon: renderIcon(AimOutlined)
    },
    {
        whateverLabel: '1973年的弹珠玩具',
        whateverKey: 'pinball-1973',
        icon: renderIcon(AimOutlined),
        // disabled: true,
        whateverChildren: [
            {
                whateverLabel: '鼠',
                whateverKey: 'rat'
            }
        ]
    },
    {
        whateverLabel: '寻羊冒险记',
        whateverKey: 'a-wild-sheep-chase',
        // disabled: true,
        icon: renderIcon(AimOutlined)
    },
    {
        whateverLabel: '舞，舞，舞',
        whateverKey: 'dance-dance-dance',
        icon: renderIcon(AimOutlined),
        whateverChildren: [
            {
                type: 'group',
                whateverLabel: '人物',
                whateverKey: 'people',
                whateverChildren: [
                    {
                        whateverLabel: '叙事者',
                        whateverKey: 'narrator',
                        icon: renderIcon(AimOutlined)
                    },
                    {
                        whateverLabel: '羊男',
                        whateverKey: 'sheep-man',
                        icon: renderIcon(AimOutlined)
                    }
                ]
            },
            {
                whateverLabel: '饮品',
                whateverKey: 'beverage',
                icon: renderIcon(AimOutlined),
                whateverChildren: [
                    {
                        whateverLabel: '威士忌',
                        whateverKey: 'whisky'
                    }
                ]
            },
            {
                whateverLabel: '食物',
                whateverKey: 'food',
                whateverChildren: [
                    {
                        whateverLabel: '三明治',
                        whateverKey: 'sandwich'
                    }
                ]
            },
            {
                whateverLabel: '过去增多，未来减少',
                whateverKey: 'the-past-increases-the-future-recedes'
            }
        ]
    }
]
</script>

<template>
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
        <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            key-field="whateverKey"
            label-field="whateverLabel"
            children-field="whateverChildren"
        />
    </n-layout-sider>
</template>

<style scoped></style>
