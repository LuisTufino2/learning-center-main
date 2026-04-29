<!--
  @summary Displays a single president card with photo, details and biography action.
  @author GitHub Copilot
-->
<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { PresidentBiographyUrlBuilder } from '../../domain/model/president-biography-url-builder.js';

const props = defineProps({
    president: {
        type: Object,
        required: true,
    },
});

const { t } = useI18n();
const hasImageError = ref(false);
const placeholderImage = 'https://placehold.co/800x500?text=Presidential+Portrait';

const biographyUrl = computed(() => PresidentBiographyUrlBuilder.fromPresidentName(props.president.name));
const resolvedImage = computed(() => {
    if (hasImageError.value || !props.president.photo) {
        return placeholderImage;
    }

    return props.president.photo;
});

const vicePresidents = computed(() => props.president.vicePresidents ?? []);

function openBiography() {
    window.open(biographyUrl.value, '_blank', 'noopener,noreferrer');
}
</script>

<template>
    <pv-card class="president-card" :aria-labelledby="`president-${president.id}-title`">
        <div class="president-card__header">
            <pv-tag severity="info" :value="`#${president.ordinal}`" />
            <h2 class="president-card__title" :id="`president-${president.id}-title`">
                {{ president.name }}
            </h2>
        </div>

        <img
            class="president-card__image"
            :src="resolvedImage"
            :alt="`${president.name} portrait`"
            @error="hasImageError = true"
            loading="lazy"
        />

        <dl class="president-card__details">
            <div>
                <dt>{{ t('presidents.card.ordinal') }}</dt>
                <dd>{{ president.ordinal }}</dd>
            </div>
            <div>
                <dt>{{ t('presidents.card.yearsInOffice') }}</dt>
                <dd>{{ president.yearsInOffice }}</dd>
            </div>
            <div>
                <dt>{{ t('presidents.card.vicePresidents') }}</dt>
                <dd class="president-card__vice-presidents">
                    <span v-if="!vicePresidents.length">—</span>
                    <pv-tag
                        v-else
                        v-for="vicePresident in vicePresidents"
                        :key="vicePresident"
                        severity="success"
                        :value="vicePresident"
                    />
                </dd>
            </div>
        </dl>

        <pv-button
            class="president-card__biography-button"
            :label="t('presidents.card.seeBiography')"
            icon="pi pi-external-link"
            severity="secondary"
            outlined
            @click="openBiography"
        />
    </pv-card>
</template>

