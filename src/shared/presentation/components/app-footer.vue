<!--
  @summary Renders the application footer with copyright and developer data.
  @author GitHub Copilot
-->
<script setup>
import { defaultDeveloper } from '../../domain/model/developer.entity.js';
</script>

<template>
    <footer class="app-footer" aria-label="Application footer">
        <p>Copyright © 2025 The White House Association, inc All rights reserved.</p>
        <p>
            Developed by {{ defaultDeveloper.code }}, {{ defaultDeveloper.fullName }}
        </p>
    </footer>
</template>

