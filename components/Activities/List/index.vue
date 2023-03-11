<template>
  <div class="flex flex-col gap-8">
    <div class="flex gap-6">
      <div class="flex justify-center items-center bg-[url('/icons/calendar.svg')] bg-contain w-[60px] h-[60px]">
        <span class="text-gray-800 text-[32px] font-roboto font-medium mt-3">
          {{ getDate }}
        </span>
      </div>
      <div class="flex flex-col gap-[2px]">
        <span class="text-gray-800 text-2xl font-roboto font-medium">
          {{ currentMonth }}
        </span>
        <span class="text-gray-600 text-lg font-roboto font-normal">
          {{ getDay }}
        </span>
      </div>
    </div>
    <div class="flex gap-8">
      <div
        v-for="(item, indexActivities) in activities"
        :key="indexActivities"
      >
        <div class="w-[296px] h-[354px] rounded-lg border border-gray-200 overflow-hidden">
          <img :src="item.poster_kegiatan" :alt="`Ilustrasi ${item.nama_kegiatan}`">
          <div class="bg-white flex justify-between px-[14px] py-4">
            <div class="flex justify-center items-center px-3 py-1 rounded-[27px] text-xs bg-gray-100 text-gray-600">
              {{ item.status }}
            </div>
            <img
              src="/icons/open-tab-circle.svg"
              alt="Ikon lihat detail agenda"
              width="28"
              height="28"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  format
} from '~/utils/date'

export default {
  name: 'ActivitiesListComponent',
  props: {
    date: {
      type: Date,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getDate () {
      if (this.date) {
        return format(this.date, { day: 'numeric' })
      }
      return format(new Date(), { day: 'numeric' })
    },
    getDay () {
      if (this.date) {
        return format(this.date, { weekday: 'long' })
      }
      return format(new Date(), { weekday: 'long' })
    },
    currentMonth () {
      return format(new Date(), { month: 'long', year: 'numeric' })
    },
  },
  data () {
    return {
      query: {
        start_date: '',
        end_date: '',
      },
      // TODO: replace data dummy with API
      activities: [
        {
          "id": "TAKLIMRU-3",
          "nama_kegiatan": "Diskusi Kitab",
          "jenis_kegiatan": "Taklim Rutin DKM",
          "tipe_kegiatan": "offline",
          "tanggal_kegiatan": "2023-03-09",
          "jam_mulai": "12:00:00",
          "jam_selesai": "15:00:00",
          "lokasi_kegiatan": "Ruang Edukasi",
          "link_kegiatan": "-",
          "poster_kegiatan": "https://dummyimage.com/1080x1080/000/fff",
          "nama_majelis_taklim": "MT Al-Falah",
          "alamat_majelis_taklim": "Jalan Kaliurang km 12",
          "no_hp_pj_majelis_taklim": "8234567890",
          "nama_pj_majelis_taklim": "Kurniawan Dwi Nugroho",
          "logo_penyelenggara": "https://dummyimage.com/400x400/000/fff",
          "logo_aljabar": "https://dummyimage.com/400x400/000/fff",
          "nama_pemateri": "Ustadz Ahmad Zaki",
          "gelar_pemateri": "Ustadz",
          "asal_instansi_pemateri": "Yayasan Pendidikan Islam Al-Falah",
          "status": "Telah Selesai"
        },
        {
          "id": "TAKLIMRU-3",
          "nama_kegiatan": "Diskusi Kitab",
          "jenis_kegiatan": "Taklim Rutin DKM",
          "tipe_kegiatan": "offline",
          "tanggal_kegiatan": "2023-03-09",
          "jam_mulai": "12:00:00",
          "jam_selesai": "15:00:00",
          "lokasi_kegiatan": "Ruang Edukasi",
          "link_kegiatan": "-",
          "poster_kegiatan": "https://dummyimage.com/1080x1080/000/fff",
          "nama_majelis_taklim": "MT Al-Falah",
          "alamat_majelis_taklim": "Jalan Kaliurang km 12",
          "no_hp_pj_majelis_taklim": "8234567890",
          "nama_pj_majelis_taklim": "Kurniawan Dwi Nugroho",
          "logo_penyelenggara": "https://dummyimage.com/400x400/000/fff",
          "logo_aljabar": "https://dummyimage.com/400x400/000/fff",
          "nama_pemateri": "Ustadz Ahmad Zaki",
          "gelar_pemateri": "Ustadz",
          "asal_instansi_pemateri": "Yayasan Pendidikan Islam Al-Falah",
          "status": "Telah Selesai"
        }
      ],
    }
  },
}
</script>
