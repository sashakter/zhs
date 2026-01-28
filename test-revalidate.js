#!/usr/bin/env node

/**
 * Тестовый скрипт для проверки инвалидации кэша
 * Использование: node test-revalidate.js [tags...]
 * Примеры:
 *   node test-revalidate.js
 *   node test-revalidate.js sort-order brands
 *   node test-revalidate.js sort-order
 */

const API_SECRET = process.env.API_SECRET || 'dev-secret';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function revalidate(tags, debug = false) {
  const endpoint = debug ? '/api/revalidate-debug' : '/api/revalidate';
  
  try {
    console.log(`🔄 ${debug ? '[DEBUG]' : ''} Инвалидирую теги: ${tags.join(', ')}`);
    console.log(`📍 URL: ${BASE_URL}${endpoint}`);
    console.log(`🔐 Secret: ${API_SECRET.substring(0, 5)}...`);
    console.log('');
    
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-secret': API_SECRET,
      },
      body: JSON.stringify({ tags }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Инвалидация успешна!');
      console.log('Tags:', data.tags);
      if (data.paths) {
        console.log('Paths:', data.paths);
      }
      console.log('Timestamp:', data.timestamp);
    } else {
      console.error('❌ Ошибка инвалидации:', data.error);
      if (data.details) {
        console.error('Details:', data.details);
      }
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Ошибка при запросе:', error.message);
    process.exit(1);
  }
}

// Получаем теги из аргументов или используем по умолчанию
const args = process.argv.slice(2);
const debug = args.includes('--debug');
const tags = args.filter(arg => arg !== '--debug');
const tagsToRevalidate = tags.length > 0 ? tags : ['sort-order', 'brands', 'products'];

console.log('🚀 Next.js Cache Revalidation Test Tool\n');
revalidate(tagsToRevalidate, debug);
